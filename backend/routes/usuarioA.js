const express = require('express');
const router = express.Router();

// Ruta para crear un nuevo Usuario A
router.post('/', async (req, res) => {
  try {
    const { objeto, ciudad, fecha, rango } = req.body;
    const db = req.app.locals.db; // Obtener la referencia a la base de datos desde las locales de la aplicación

    const usuarioA = {
      objeto,
      ciudad,
      fecha,
      rango,
    };

    await db.collection('usuariosa').insertOne(usuarioA);

    res.status(201).json(usuarioA);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el Usuario A' });
  }
});

// Ruta para realizar la búsqueda
router.post('/buscar', async (req, res) => {
  try {
    const { objeto, ciudad, fecha, rango } = req.body;
    const db = req.app.locals.db; // Obtener la referencia a la base de datos desde las locales de la aplicación

    // Lógica para buscar coincidencias en la base de datos
    const resultados = await db.collection('usuariosb').find({
      objeto,
      ciudad,
      fecha: { $gte: new Date(fecha) },
      rango,
    }).toArray();

    res.status(200).json(resultados);
  } catch (error) {
    res.status(500).json({ error: 'Error al realizar la búsqueda' });
  }
});

module.exports = router;