const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const Customer = require('./Customer');

const Order = sequelize.define('Order', {
  totalAmount: { type: DataTypes.FLOAT, allowNull: false },
  status: { type: DataTypes.ENUM('Pending', 'Shipped', 'Delivered', 'Cancelled'), defaultValue: 'Pending' },
}, { timestamps: true });

Order.belongsTo(Customer, { foreignKey: 'customerId' });

module.exports = Order;
