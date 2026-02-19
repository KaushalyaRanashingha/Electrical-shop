const db = require("../config/db");

exports.getProducts = (req, res) => {
  db.query("SELECT * FROM Products", (err, results) => {
    if (err) return res.send(err);

    res.render("admin/product", {
      pageTitle: "Products",
      products: results
    });
  });
};

exports.addProduct = (io) => (req, res) => {
  const { name, sku, category, stock, minStock, price } = req.body;

  const query = `
    INSERT INTO Products (name, sku, category, stock, minStock, price)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [name, sku, category, stock, minStock, price], (err) => {
    if (err) return res.send(err);

    // Real-time update
    io.emit("productUpdated");

    res.redirect("/admin/product");
  });
};

exports.deleteProduct = (io) => (req, res) => {
  db.query("DELETE FROM Products WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.send(err);

    io.emit("productUpdated");

    res.redirect("/admin/product");
  });
};
