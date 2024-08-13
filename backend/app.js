const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();

// Middleware y configuración de rutas
// ...

// Conexión a la base de datos
let db;

MongoClient.connect('mongodb+srv://maxiballadares:e1LVU3r9OQSzB6Ay@laapp.n6ddtu1.mongodb.net/', { useUnifiedTopology: true })
  .then(client => {
    console.log('Conexión exitosa a la base de datos');
    db = client.db('dataLaApp');
    app.locals.db = db; // Guardar la referencia a la base de datos en las locales de la aplicación
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos:', err);
    process.exit(1);
  });

module.exports = app;