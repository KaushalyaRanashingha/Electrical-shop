const mysql = require('mysql2'); 

const db = mysql.createConnection({
    host: '127.0.0.1',     
    user: 'root',          
    password: 'thushi379', 
    database: 'ElectricalShop',
    port: 3306
});

db.connect((err) => {
    if (err) {
        console.error('MySQL connection error:', err);
    } else {
        console.log('MySQL connected successfully!');
    }
});

module.exports = db;
