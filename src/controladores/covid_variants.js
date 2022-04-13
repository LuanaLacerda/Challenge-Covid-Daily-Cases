const knex = require('../conexao')

// Retornar um Status: 200 e uma Mensagem "Backend Challenge 2021 🏅 - Covid Daily Cases"
const getTest = async (req, res) => {
    res.status(200).json('Backend Challenge 2021 🏅 - Covid Daily Cases')
};

// [GET]/cases/:date/count: Listar todos os registros da base de dados no dia selecionado, agrupados por país e separados por variante.
const listarDadosDia = async (req, res) => {
    const { date } = req.params

    try {
        const listarDadosDia = await knex('covid_variants')
            .select('location', 'variant')
            .where({ date })
            .groupBy('location', 'variant')

            .debug()

        return res.status(200).json(listarDadosDia)


    } catch (error) {
        return res.status(500).json({ mensagem: "Ocorreu um erro inesperado. - " + error.message })

    }


};

//Listar todos os registros da base de dados, retornando a soma dos casos registrados de acordo com a data selecionada, agrupados por país e separados por variante.
const listarSomaCasos = async (req, res) => {
    const { date } = req.params

    try {
        const listarDadosDia = await knex('covid_variants')
            .select('location', 'variant')
            .where({ date })
            .groupBy('location', 'variant')
            .sum('num_sequences_total')
            .debug()

        return res.status(200).json(listarDadosDia)


    } catch (error) {
        return res.status(500).json({ mensagem: "Ocorreu um erro inesperado. - " + error.message })

    }

}

//Listar as datas disponíveis no dataset
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