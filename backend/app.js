const express = require('express');
const connectDB = require('./config/database');
const loginRouter = require('./routes/Login');
const usuarioARoutes = require('./routes/usuarioA');
const usuarioBRoutes = require('./routes/usuarioB');

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware
app.use(express.json());

// Rutas
app.use('/api/login', loginRouter);
app.use('/api/usuarioA', usuarioARoutes);
app.use('/api/usuarioB', usuarioBRoutes);

module.exports = app;