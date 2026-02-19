const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Product = sequelize.define('Product', {
  name: { type: DataTypes.STRING, allowNull: false },
  sku: { type: DataTypes.STRING, allowNull: false, unique: true },
  category: { type: DataTypes.STRING, allowNull: false },
  stock: { type: DataTypes.INTEGER, defaultValue: 0 },
  minStock: { type: DataTypes.INTEGER, defaultValue: 0 },
  price: { type: DataTypes.FLOAT, allowNull: false },
}, { timestamps: true });

module.exports = Product;
