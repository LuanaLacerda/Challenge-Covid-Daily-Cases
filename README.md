# Backend Challenge 🏅 2022 - Covid Daily Cases 

*This is a challenge by* [Coodesh](https://https://coodesh.com/)


## Introdução

Desafio onde foi desenvolvido uma REST API utilizando o hitórico de casos de Covid, disponível no [Kaggle](https://www.kaggle.com/datasets/yamqwe/omicron-covid19-variant-daily-cases).

## Linguagem, framework e/ou tecnologias usadas

- NodeJs
- Javascript
- PostegreSQL
- ExpressJs

## Instalção

É necessário possuir o ambiente Node.js instalado para executar este projeto. 

- 1 - Clonar este repositóiro
- 2 - Utilizar $ npm install na pasta raiz do projeto

## Deploy

Projeto está hospedado pelo Heroku para utilizar a API utilizar o link abaixo:

https://challenge-covid.herokuapp.com/

## Rotas

- ```[GET]/``` : Retornar um Status: 200 e uma Mensagem "Backend Challenge 2021 🏅 - Covid Daily Cases"

- ``[GET]/cases/:date/count``: Listar todos os registros da base de dados no dia selecionado, agrupados por país e separados por variante.

- ``[GET]/cases/:date/cumulative``: Listar todos os registros da base de dados, retornando a soma dos casos registrados de acordo com a data selecionada, agrupados por país e separados por variante.

- ``[GET]/dates``: Listar as datas disponíveis no dataset