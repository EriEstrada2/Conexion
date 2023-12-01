const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Factura = sequelize.define('Factura', {
  // Define las columnas según la estructura de tu tabla Factura
  // ...

  EmisorID: { type: DataTypes.INTEGER, allowNull: false },
  AdquirenteID: { type: DataTypes.INTEGER, allowNull: false },
  ImprentaID: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = Factura;
