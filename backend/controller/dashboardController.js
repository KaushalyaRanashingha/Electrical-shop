const db = require("../config/db");

exports.getDashboard = (req, res) => {

  const statsQuery = `
    SELECT
    (SELECT COUNT(*) FROM Products) AS totalProducts,
    (SELECT COUNT(*) FROM Orders) AS totalOrders,
    (SELECT COUNT(*) FROM Customers) AS totalCustomers,
    (SELECT SUM(totalAmount) FROM Orders) AS totalRevenue
  `;

  db.query(statsQuery, (err, statsResult) => {
    if (err) return res.send(err);

    const stats = [
      { label: "Products", value: statsResult[0].totalProducts },
      { label: "Orders", value: statsResult[0].totalOrders },
      { label: "Customers", value: statsResult[0].totalCustomers },
      { label: "Revenue", value: "Rs. " + (statsResult[0].totalRevenue || 0) }
    ];

    db.query("SELECT * FROM Products", (err2, inventoryData) => {
      if (err2) return res.send(err2);

      res.render("admin/dashboard", {
        pageTitle: "Dashboard",
        stats,
        inventoryData
      });
    });
  });
};
