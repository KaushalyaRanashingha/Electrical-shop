const db = require('../config/db');

exports.getOrders = (req, res) => {
  db.query(`
    SELECT orders.*, customers.name AS customer_name
    FROM orders
    JOIN customers ON orders.customer_id = customers.id
  `, (err, results) => {
    if (err) return res.send(err);
    res.render('admin/order', { orders: results });
  });
};
