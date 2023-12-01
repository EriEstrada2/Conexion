const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Imprenta = sequelize.define('Imprenta', {
  NombreDueno: { type: DataTypes.STRING, allowNull: false },
  NombreImprenta: { type: DataTypes.STRING, allowNull: false },
  RUC: { type: DataTypes.STRING, allowNull: false },
  NumeroAutorizacion: { type: DataTypes.STRING, allowNull: false },
  Destinatario: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Imprenta;