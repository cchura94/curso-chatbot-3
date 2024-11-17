const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./bd.js")

const Contacto = sequelize.define(
    'Contacto',
    {
      // Model attributes are defined here
      nombre: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      id_whatsapp: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      saldo_pendiente: {
        type: DataTypes.DECIMAL(12, 2)
      }
    },
    {
      // Other model options go here
    },
  );

Contacto.sync()

module.exports = Contacto;