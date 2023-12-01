const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const DetallePago = sequelize.define('DetallePago', {
  // Define las columnas según la estructura de tu tabla Detalle_pago
  // ...

  FacturaID: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = DetallePago;