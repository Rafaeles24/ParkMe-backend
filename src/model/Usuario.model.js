const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');
const Cliente = require('./Cliente.model');

class Usuario extends Model {}

Usuario.init(
    {   
        nickname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
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
        modelName: "Usuario",
    }
);


//La relacion se entiende como un usuario solo lo puede tener un cliente, pero un cliente puede tener muchos usuarios.
Usuario.belongsTo(Cliente, {foreignKey: 'usuario_id'});

module.exports = Usuario;