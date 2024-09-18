const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('../../model/Usuario.model');
const Cliente = require('../../model/Cliente.model');
const Empleado = require('../../model/Empleado.model');
require('dotenv').config();

const SECRET_KEY = process.env.DB_SECRET_KEY || 'clave_secreta';

//login
const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const usuario = await Usuario.findOne({where:{username}});
        if (!usuario) return res.status(400).json({message: 'Usuario no encontrado'});
        const pass = await bcrypt.compare(password, usuario.password);
        if (!pass) return res.status(400).json({ message: 'Contraseña incorrecta' });
        const token = jwt.sign({id: usuario.id, username: usuario.username}, SECRET_KEY, {expiresIn: '24h'});
        res.status(200).json({ message: 'Login exitoso', token });
    } catch (err) {
        res.status(500).json({ message: `Ocurrio un error en el login ${err}` });
    }
}

//registrar cliente
const registrarCliente = async (req, res) => {
    const { nombre, apellido, nickname, username, password, telefono, direccion} = req.body;
    try {
        const existe = await Usuario.findOne({where:{username}});
        if (existe) return res.status(400).json({ message: 'El nombre de usuario ya está en uso' });
        const passHash = await bcrypt.hash(password, 10);

        const usuario = await Usuario.create({
            nickname: nickname,
            username: username,
            password: passHash
        });

        await Cliente.create({
            usuario_id: usuario.id,
            nombre: nombre,
            apellido: apellido,
            direccion: direccion,
            telefono: telefono
        });
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (err) {
        res.status(500).json({ message: `Hubo un error al registrar usuario ${err}` });
    }
}

//registrar empleado
const registrarEmpleado = async (req, res) => {
    const {nombre, apellido, nickname, username, password, direccion, telefono, salario } = req.body;
    try {
        const existe = await Usuario.findOne({where:{username}});
        if (existe) return res.status(400).json({ message: 'El nombre de usuario ya está en uso' });
        const passHash = await bcrypt.hash(password, 10);

        const usuario = await Usuario.create({
            nickname: nickname,
            username: username,
            password: passHash
        });

        //fechas
        const fechaActual = new Date();
        const year = String(fechaActual.getFullYear()); 
        const month = String(fechaActual.getMonth() + 1).padStart(2, '0'); 
        const day = String(fechaActual.getDate()).padStart(2, '0'); 

        const fecha = `${year}-${month}-${day}`;

        await Empleado.create({
            usuario_id: usuario.id,
            nombre: nombre,
            apellido: apellido,
            direccion: direccion,
            telefono: telefono,
            salario: salario,
            fecha_contrato: fecha
        });
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (err) {
        res.status(500).json({ message: `Hubo un error al registrar usuario ${err}` });
    }
}

module.exports = {
    login,
    registrarCliente,
    registrarEmpleado
};