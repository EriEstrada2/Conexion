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

    // Crear registros de ejemplo
// Crear registros de ejemplo
return Promise.all([
  Adquirente.create({
    Identificacion: '123456789', // Asegúrate de proporcionar un valor válido
    Nombre: 'Juan',
    Apellido: 'Perez',
    Firma: 'Firma1',
    FechaCompra: new Date(),
  }),
  Imprenta.create({
    NombreDueno: 'Dueño1',
    NombreImprenta: 'Imprenta1',
    RUC: '1234567890123',
    NumeroAutorizacion: 'Autorizacion1',
    Destinatario: 'Destinatario1',
  }),
  // Puedes continuar con las otras tablas según sea necesario
]);

  })
  .then((results) => {
    results.forEach((result, index) => {
      console.log(`Registro creado en ${result.constructor.name}:`, result.toJSON());
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  })
  .finally(() => {
    // Cierra la conexión con la base de datos al finalizar
    db.close();
  });
