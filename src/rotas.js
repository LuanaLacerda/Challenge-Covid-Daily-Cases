const express = require('express');
const controladorCovidVariants = require('./controladores/covid_variants');

const rotas = express()

rotas.get('/', controladorCovidVariants.getTest);
rotas.get('/cases/:date/count', controladorCovidVariants.listarDadosDia);
rotas.get('/cases/:date/cumulative', controladorCovidVariants.listarDadosDia);
rotas.get(':date', controladorCovidVariants.listarDadosDia);

module.exports = rotas;