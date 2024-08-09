const mongoose = require('mongoose');

const usuarioBSchema = new mongoose.Schema({
  usuario: String,
  password: String,
  objeto: String,
  precio: Number,
  ciudad: String,
  fecha: Date,
  rango: String,
});

const UsuarioB = mongoose.model('UsuarioB', usuarioBSchema);

module.exports = UsuarioB;