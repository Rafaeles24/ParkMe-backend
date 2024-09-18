const express = require('express');
const morgan = require('morgan');
const app = express();
const router = require('../router/api');

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('ParkMe-lets go!');
})

app.use('/api/v1', router);

module.exports = app;
