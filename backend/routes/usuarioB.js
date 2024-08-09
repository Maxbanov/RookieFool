const express = require('express');
const router = express.Router();
const UsuarioB = require('../models/UsuarioB');

// Ruta para crear un nuevo Usuario B
router.post('/', async (req, res) => {
  try {
    const { objeto, precio, ciudad, fecha, rango } = req.body;
    const usuarioB = new UsuarioB({
      objeto,
      precio,
      ciudad,
      fecha,
      rango,
    });
    await usuarioB.save();
    res.status(201).json(usuarioB);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el Usuario B' });
  }
});

module.exports = router;