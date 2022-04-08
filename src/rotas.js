const express = require('express');
const controladorCovidVariants = require('./controladores/covid_variants');

const rotas = express()

rotas.get('/', controladorCovidVariants.getTest);


module.exports = rotas;