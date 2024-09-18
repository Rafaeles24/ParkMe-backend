const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');
const Usuario = require('./Usuario.model');

class Empleado extends Model {}

Empleado.init(
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
        salario: {
            type: DataTypes.DOUBLE,
            allowNull: true,
        },
        fecha_contrato: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        estado_registro: {
            type: DataTypes.STRING,
            defaultValue: 'A',
        }
    },
    {
        sequelize,
        modelName: "Empleado",
    }
);

Empleado.belongsTo(Usuario, {foreignKey: 'usuario_id'});

module.exports = Empleado;