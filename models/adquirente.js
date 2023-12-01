const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Adquirente = sequelize.define('Adquirente', {
  Identificacion: { type: DataTypes.STRING, allowNull: false },
  Nombre: { type: DataTypes.STRING, allowNull: false },
  Apellido: { type: DataTypes.STRING, allowNull: false },
  Firma: { type: DataTypes.STRING, allowNull: false },
  FechaCompra: { type: DataTypes.DATE, allowNull: false },
});

module.exports = Adquirente;
