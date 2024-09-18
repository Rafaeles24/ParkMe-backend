const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');
const Cliente = require('./Cliente.model');

class Vehiculo extends Model {}

Vehiculo.init(
    {
/*         cliente_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }, */
        placa: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        marca: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        estado_registro: {
            type: DataTypes.STRING,
            defaultValue: 'A',
        }
    },
    {
        sequelize,
        modelName: "Vehiculo",
    }
);

module.exports = Vehiculo;