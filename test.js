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
    return Emisor.create({
      NombreComercial: 'Mi Compañía',
      RazonSocial: 'Compañía S.A.',
      DireccionMatriz: 'Dirección Matriz',
      DireccionEstablecimiento: 'Dirección Establecimiento',
    });
  })
  .then((emisor) => {
    console.log('Emisor creado:', emisor.toJSON());

    // Actualizar un campo
    return emisor.update({ NombreComercial: 'Nuevo Nombre Comercial' });
  })
  .then((emisor) => {
    console.log('Emisor actualizado:', emisor.toJSON());

    // Buscar todos los emisores
    return Emisor.findAll();
  })
  .then((emisores) => {
    console.log('Todos los emisores:', emisores.map((e) => e.toJSON()));

    // Eliminar un emisor
    return Emisor.destroy({ where: { id: 1 } });
  })
  .then(() => {
    console.log('Emisor eliminado.');

    // Consultar nuevamente todos los emisores después de eliminar uno
    return Emisor.findAll();
  })
  .then((emisores) => {
    console.log('Todos los emisores después de eliminar uno:', emisores.map((e) => e.toJSON()));
  })
  .catch((error) => {
    console.error('Error:', error);
  })
  .finally(() => {
    // Cierra la conexión con la base de datos al finalizar
    db.close();
  });
