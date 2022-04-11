const conexao = require('../conexao');

async function getTest(req, res) {
    res.status(200).json('Backend Challenge 2021 🏅 - Covid Daily Cases')
};

// async function listarDadosDia(req, res) {
//     const date = req.params.date

//     try {
//         const query = 'select * from covid_variants where date = $1'
//         const {rows, rowCount} = await conexao.query(query,[date])

//         if(rowCount <=0){
//             return res.status(404).json({messagem: "Não foi encontrado para a data fornecida"})
//         }

//     } catch (error) {
//         return res.status(500).json({ mensagem: "Ocorreu um erro inesperado. - " + error.message })

//     }


// };

async function listarSomaCasos(req, res) {

}

async function listarDatasDisponiveis(req, res) {

    try {
        const query = 'select distinct date from covid_variants'
        const { rows } = await conexao.query(query)

        return res.json(200).json(rows)
    } catch (error) {
        return res.status(500).json({ mensagem: "Ocorreu um erro inesperado. - " + error.message })

    }


}


module.exports = {
    getTest,
    //listarDadosDia,
    listarSomaCasos,
    listarDatasDisponiveis


}