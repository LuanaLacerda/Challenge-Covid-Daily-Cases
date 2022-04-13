const express = require('express');
const rotas = require('./rotas');
const swaggerUi = require('swagger-ui-express')
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(rotas);
app.use(cors());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(require('../swagger.json')));

module.exports = app;