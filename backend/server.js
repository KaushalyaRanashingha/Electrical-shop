const express = require('express');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');
const db = require('./config/db');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.use(express.static(path.join(__dirname, 'public')));

// Dummy/Initial data
let stats = [
  { label: 'Users', value: 0, description: 'Total registered users' },
  { label: 'Orders', value: 0, description: 'Orders placed today' },
  { label: 'Revenue', value: 'Rs. 0', description: 'Revenue this month' },
  { label: 'Products', value: 3, description: 'Active products in store' }
];

let inventoryData = [
  { name: 'Fan', sku: 'F001', category: 'Electrical', stock: 12, minStock: 5, price: 5000 },
  { name: 'LED Bulb', sku: 'L001', category: 'Electrical', stock: 50, minStock: 10, price: 150 },
  { name: 'Switch', sku: 'S001', category: 'Electrical', stock: 25, minStock: 5, price: 200 }
];


// Routes
// Dashboard
app.get('/admin/dashboard', (req, res) => {
  res.render('admin/dashboard', { pageTitle: 'Dashboard', stats, inventoryData });
});

// Product Page
app.get('/admin/product', (req, res) => {
  db.query('SELECT * FROM Products', (err, results) => {
    if (err) return res.status(500).send('DB query error: ' + err.message);
    const categories = [...new Set(results.map(p => p.category))];
    res.render('admin/product', { pageTitle: 'Products', products: results, categories });
  });
});

// Add Product
app.post('/admin/product/add', (req, res) => {
  const { name, category, price, stock, description, status } = req.body;
  const productStatus = status ? 'Active' : 'Inactive';

  const query = 'INSERT INTO Products (name, category, price, stock, description, status) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [name, category, price, stock, description, productStatus], (err, result) => {
    if (err) return res.status(500).send('DB insert error: ' + err.message);

    // Update stats/inventory
    inventoryData.push({ name, sku: 'TEMP', category, stock, minStock: 5, price });
    stats[3].value += 1; 

    // Notify all connected dashboards
    io.emit('dashboardUpdate', { stats, inventoryData });

    res.redirect('/admin/product');
  });
});

// Socket.IO
io.on('connection', (socket) => {
  console.log('A user connected');

  // Send initial data
  socket.emit('dashboardUpdate', { stats, inventoryData });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start server
const PORT = 5002;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
