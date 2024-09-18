const Tarifa = require('../../model/Tarifa.model');

const getTarifa = async (req, res) => {
    try {
        const tarifa = await Tarifa.findAll();
        const size = await Tarifa.count();
        return res.status(200).json({ data: tarifa, size: size});
    } catch (err) {
        return res.status(500).json({ error: `Hubo un error ${err}` });
    }
}

module.exports = {
    getTarifa
}