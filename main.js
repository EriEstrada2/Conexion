const db = require('./db');
const Emisor = require('./models/emisor');
const Adquirente = require('./models/adquirente');
const Imprenta = require('./models/imprenta');
const DetallePago = require('./models/detalle_pago');
const Factura = require('./models/factura');
const GuiaRemision = require('./models/guiaremision');

// Sincronizar modelos con la base de datos
db.sync({ force: true })
  .then(() => {
    console.log('Modelos sincronizados correctamente.');
  })
  .catch((error) => {
    console.error('Error al sincronizar modelos:', error);
  });
