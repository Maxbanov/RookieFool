const mongoose = require('mongoose');

const usuarioASchema = new mongoose.Schema({
  usuario: String,
  password: String,
  objeto: String,
  ciudad: String,
  fecha: Date,
  rango: String,
});

const UsuarioA = mongoose.model('UsuarioA', usuarioASchema);

module.exports = UsuarioA;