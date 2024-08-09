const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://maxiballadares:e1LVU3r9OQSzB6Ay@laapp.n6ddtu1.mongodb.net/?retryWrites=true&w=majority&appName=LaApp', {
      dbName: 'dataLaApp',
    });
    console.log('Conexión exitosa a la base de datos');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    process.exit(1);
  }
};

module.exports = connectDB;