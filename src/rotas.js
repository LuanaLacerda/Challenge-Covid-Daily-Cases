const express = require('express');
const { getTest,
    listarSomaCasos,
    listarDatasDisponiveis,
    listarDadosDia } = require('./controladores/covid_variants');

const rotas = express()

rotas.get('/', getTest);
rotas.get('/dates', listarDatasDisponiveis);
rotas.get('/cases/:date/count', listarDadosDia);
rotas.get('/cases/:date/cumulative', listarSomaCasos);


module.exports = rotas;