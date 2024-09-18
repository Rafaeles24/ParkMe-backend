const Estacionamiento = require('../../model/Estacionamiento.model');

const getEstacionamiento = async (req, res) => {
    try {
        const estacionamiento = await Estacionamiento.findAll();
        const size = await Estacionamiento.count();
        return res.status(200).json({ data: estacionamiento, size: size });
    } catch (err) {
        return res.status(500).json({ error: `Hubo un error ${err}` });
    }
}

module.exports = {
    getEstacionamiento
}