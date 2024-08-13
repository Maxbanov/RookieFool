const express = require('express');
const router = express.Router();

// Ruta para crear un nuevo Usuario B
router.post('/', async (req, res) => {
  try {
    const { objeto, precio, ciudad, fecha, rango } = req.body;
    const db = req.app.locals.db; // Obtener la referencia a la base de datos desde las locales de la aplicación

    const usuarioB = {
      objeto,
      precio,
      ciudad,
      fecha,
      rango,
    };

    await db.collection('usuariosb').insertOne(usuarioB);

    res.status(201).json(usuarioB);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el Usuario B' });
  }
});

module.exports = router;