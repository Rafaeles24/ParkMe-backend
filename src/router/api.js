const router = require('express').Router();
const authenticateToken = require('../middleware/authMiddleware');

const usuarioController = require('../app/http/Usuario.controller');
const estacionamientoController = require('../app/http/Estacionamiento.controller');
const tarifaController = require('../app/http/Tarifa.controller');

router.post('/usuario/login', usuarioController.login);
//Cliente
router.post('/usuario/cliente/create', usuarioController.registrarCliente);
//Trabajador
router.post('/usuario/empleado/create', usuarioController.registrarEmpleado);

router.use(authenticateToken);

//Estacionamiento
router.get('/estacionamiento', estacionamientoController.getEstacionamiento);

//Tarifa
router.get('/tarifa', tarifaController.getTarifa);

module.exports = router;