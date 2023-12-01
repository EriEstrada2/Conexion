const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const GuiaRemision = sequelize.define('GuiaRemision', {
  NumeroGuiaRemision: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
});

module.exports = GuiaRemision;
