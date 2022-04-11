const express = require('express');
const controladorCovidVariants = require('./controladores/covid_variants');

const rotas = express()

rotas.get('/', controladorCovidVariants.getTest);
//rotas.get('/cases/:date/count', controladorCovidVariants.listarDadosDia);
rotas.get('/cases/:date/cumulative', controladorCovidVariants.listarSomaCasos);
rotas.get('/date', controladorCovidVariants.listarDatasDisponiveis);

module.exports = rotas;