const db = require('../config/db');

exports.getReport = (req, res) => {
  const query = 'SELECT * FROM reports';
  db.query(query, (err, results) => {
    if (err) return res.status(500).send('Database error');
    res.render('admin/report', { pageTitle: 'Reports', reports: results });
  });
};
