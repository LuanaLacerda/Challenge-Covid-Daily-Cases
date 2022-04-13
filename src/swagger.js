const swaggerAutogen = require('swagger-autogen');


const outputFile = './swagger.json';
const endpointsFiles = ['./src/rotas.js'];

/* NOTA: se você usa o Express Router, deve passar no 
   'endpointsFiles' apenas o arquivo raiz onde a rota inicia, 
   como index.js, app.js, routes.js, ... */

swaggerAutogen()(outputFile, endpointsFiles);
//swaggerAutogen()("./swagger.json", ["./rotas.js"]);