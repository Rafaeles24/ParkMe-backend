const app = require('./app/app');
const sequelize = require('./config/db');
require('dotenv').config();

const PORT = process.env.PORT || 4000;

sequelize.sync({ /* force: true */ }).then(() => {
    console.log('Base de datos sincronizada.');
  }).catch(err => {
    console.log('Error al sincronizar la base de datos:', err);
  });
  

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
})