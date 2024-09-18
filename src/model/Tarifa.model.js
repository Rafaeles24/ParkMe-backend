const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class Tarifa extends Model {}

Tarifa.init(
    {
        valor: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        motivo: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: "Tarifa",
    }
);

module.exports = Tarifa;