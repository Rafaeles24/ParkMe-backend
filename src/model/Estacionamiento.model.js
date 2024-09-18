const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class Estacionamiento extends Model {}

Estacionamiento.init(
    {
        posicion: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        estado_registro: {
            type: DataTypes.STRING,
            defaultValue: 'A',
        }
    },
    {
        sequelize,
        modelName: "Estacionamiento",
    }
);

module.exports = Estacionamiento;