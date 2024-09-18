const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
})

sequelize.authenticate()
  .then(() => console.log(`Conectado a la base de datos ${process.env.DB_DATABASE}`))
  .catch(err => console.log(`Hubo un error en la conexion: ${err}`));

module.exports = sequelize;
