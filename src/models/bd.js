const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bd_whatsapp_bot', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

async function testConexion(){
    try {
        await sequelize.authenticate();
        console.log('CONEXION CORRECTA CON BD.');
      } catch (error) {
        console.error('ERROR DE CONEXION: ', error);
      }
}

testConexion()


module.exports = sequelize