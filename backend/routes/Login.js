const express = require('express');
const router = express.Router();
const UsuarioA = require('../models/UsuarioA');
const UsuarioB = require('../models/UsuarioB');

// Ruta para manejar el inicio de sesión
router.post('/', async (req, res) => {
  try {
    const { usuario, password, tipoUsuario } = req.body;

    // Buscar al usuario en la base de datos según el tipo de usuario
    let user;
    if (tipoUsuario === 'Usuario A') {
      user = await UsuarioA.findOne({ usuario, password });
    } else if (tipoUsuario === 'Usuario B') {
      user = await UsuarioB.findOne({ usuario, password });
    }

    if (!user) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    // Inicio de sesión exitoso
    res.status(200).json({ message: 'Inicio de sesión exitoso' });
  } catch (error) {
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
});

module.exports = router;