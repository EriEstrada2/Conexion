const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'facturacion.db', // Nombre del archivo SQLite
});

module.exports = sequelize;