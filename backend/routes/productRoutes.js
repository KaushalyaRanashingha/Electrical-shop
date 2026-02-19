const express = require("express");
const router = express.Router();
const db = require("../config/db"); 

module.exports = (io) => {
  // GET all products page
  router.get("/", async (req, res) => {
    try {
      const [products] = await db.query("SELECT * FROM products");
      const categories = [...new Set(products.map(p => p.category))]; 
      res.render("admin/product", { products, categories });
    } catch (err) {
      console.error(err);
      res.send("Error fetching products");
    }
  });

  // ADD new product
  router.post("/add", async (req, res) => {
    try {
      const { name, category, price, stock, description, status } = req.body;
      const productStatus = status ? "Active" : "Inactive";

      await db.query(
        "INSERT INTO products (name, category, price, stock, description, status) VALUES (?, ?, ?, ?, ?, ?)",
        [name, category, price, stock, description, productStatus]
      );

      io.emit("productUpdated"); 
      res.redirect("/admin/product");
    } catch (err) {
      console.error(err);
      res.send("Error adding product");
    }
  });

  // EDIT product
  router.post("/edit/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { name, category, price, stock, description, status } = req.body;
      const productStatus = status ? "Active" : "Inactive";

      await db.query(
        "UPDATE products SET name=?, category=?, price=?, stock=?, description=?, status=? WHERE id=?",
        [name, category, price, stock, description, productStatus, id]
      );

      io.emit("productUpdated");
      res.redirect("/admin/product");
    } catch (err) {
      console.error(err);
      res.send("Error editing product");
    }
  });

  // DELETE product
  router.get("/delete/:id", async (req, res) => {
    try {
      const { id } = req.params;
      await db.query("DELETE FROM products WHERE id=?", [id]);
      io.emit("productUpdated");
      res.redirect("/admin/product");
    } catch (err) {
      console.error(err);
      res.send("Error deleting product");
    }
  });

  return router;
};
