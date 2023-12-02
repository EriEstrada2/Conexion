const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Emisor = sequelize.define('Emisor', {
  NombreComercial: { type: DataTypes.STRING, allowNull: false },
  RazonSocial: { type: DataTypes.STRING, allowNull: false },
  DireccionMatriz: { type: DataTypes.STRING, allowNull: false },
  DireccionEstablecimiento: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Emisor;
