const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');
const Vehiculo = require('./Vehiculo.model');

class Cliente extends Model {}

Cliente.init(
    {
        usuario_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telefono: {
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
        modelName: "Cliente",
    }
);

//La relacion se entiende como 1 a muchos, es decir, un cliente tiene 1 o muchos vehiculos(hasMany).
Cliente.hasMany(Vehiculo, {foreignKey: 'cliente_id', as: 'vehiculos'})

module.exports = Cliente;