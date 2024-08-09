const express = require('express');
const router = express.Router();
const UsuarioA = require('../models/UsuarioA');

// Ruta para crear un nuevo Usuario A
router.post('/', async (req, res) => {
  try {
    const { objeto, ciudad, fecha, rango } = req.body;
    const usuarioA = new UsuarioA({
      objeto,
      ciudad,
      fecha,
      rango,
    });
    await usuarioA.save();
    res.status(201).json(usuarioA);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el Usuario A' });
  }
});

// Ruta para realizar la búsqueda
router.post('/buscar', async (req, res) => {
  try {
    const { objeto, ciudad, fecha, rango } = req.body;
    // Lógica para buscar coincidencias en la base de datos
    const resultados = await UsuarioB.find({
      objeto,
      ciudad,
      fecha: { $gte: fecha },
      rango,
    });
    res.status(200).json(resultados);
  } catch (error) {
    res.status(500).json({ error: 'Error al realizar la búsqueda' });
  }
});

module.exports = router;