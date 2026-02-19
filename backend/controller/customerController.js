const db = require('../config/db');

exports.getCustomers = (req, res) => {
  db.query("SELECT * FROM customers", (err, results) => {
    if (err) return res.send(err);
    res.render('admin/customer', { customers: results });
  });
};
