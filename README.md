# Backend Challenge 🏅 2022 - Covid Daily Cases 

*This is a challenge by* [Coodesh](https://https://coodesh.com/)


## Introdução

Desafio em que uma REST API foi desenvolvida a partir do histórico de casos de Covid disponível no Kaggle. [Kaggle](https://www.kaggle.com/datasets/yamqwe/omicron-covid19-variant-daily-cases).

## Linguagem, framework e/ou tecnologias usadas

- NodeJs
- Javascript
- PostgreSQL
- ExpressJs
- Swagger

## Instalação

É necessário possuir o ambiente Node.js instalado para executar este projeto. 

- 1 - Clonar este repositóiro
- 2 - Utilizar $ npm install na pasta raiz do projeto

## Deploy

O servidor da aplicação está hospedado no Heroku. Para utilizar a API, recorra ao link abaixo:

https://challenge-covid.herokuapp.com/

Obs: Como os dados excederam o limite do Heroku a api ficará disponível somente por alguns dias.

## Documentação

Acesse a documentação através do [link](https://challenge-covid.herokuapp.com/docs/#/).

https://challenge-covid.herokuapp.com/docs/#/

## Rotas

- ```[GET]/``` : Retornar um Status: 200 e uma Mensagem "Backend Challenge 2021 🏅 - Covid Daily Cases"

- ``[GET]/cases/:date/count``: Listar todos os registros da base de dados no dia selecionado, agrupados por país e separados por variante.

- ``[GET]/cases/:date/cumulative``: Listar todos os registros da base de dados, retornando a soma dos casos registrados de acordo com a data selecionada, agrupados por país e separados por variante.

- ``[GET]/dates``: Listar as datas disponíveis no dataset