const knex = require('../conexao')

const getTest = async (req, res) => {
    res.status(200).json('Backend Challenge 2021 🏅 - Covid Daily Cases')
};

const listarDadosDia = async (req, res) => {
    const { date } = req.params

    const datas = await knex('covid_variants').distinct('date').where({ date }).first()


    if (!datas) {
        return res.status(404).json('Data não encontrada, favor verificar datas diponíveis!')
    }

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

    const dataExiste = await knex('covid_variants').where({ date }).first()

    if (!dataExiste) {
        return res.status(404).json('Data não encontrada, favor verificar datas diponíveis!')
    }

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
    const datas = await knex('covid_variants').distinct('date');
    return res.status(200).json(datas);
}


module.exports = {
    getTest,
    listarDadosDia,
    listarSomaCasos,
    listarDatasDisponiveis
}