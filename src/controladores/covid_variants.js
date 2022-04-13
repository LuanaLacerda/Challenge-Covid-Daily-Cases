const knex = require('../conexao')

const getTest = async (req, res) => {
    res.status(200).json('Backend Challenge 2021 🏅 - Covid Daily Cases')
};

const listarDadosDia = async (req, res) => {
    const { date } = req.params

    try {
        const listarDadosDia = await knex('covid_variants')
            .select('location', 'variant')
            .where({ date })
            .groupBy('location', 'variant')

        return res.status(200).json(listarDadosDia)

    } catch (error) {
        return res.status(500).json({ mensagem: "Ocorreu um erro inesperado. - " + error.message })
    }
};

const listarSomaCasos = async (req, res) => {
    const { date } = req.params

    try {
        const listarDadosDia = await knex('covid_variants')
            .select('location', 'variant')
            .where({ date })
            .groupBy('location', 'variant')
            .sum('num_sequences_total')

        return res.status(200).json(listarDadosDia)

    } catch (error) {
        return res.status(500).json({ mensagem: "Ocorreu um erro inesperado. - " + error.message })
    }
}

const listarDatasDisponiveis = async (req, res) => {
    const datas = await knex('covid_variants').distinct('date').debug();
    return res.status(200).json(datas);
}


module.exports = {
    getTest,
    listarDadosDia,
    listarSomaCasos,
    listarDatasDisponiveis
}