const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'ec2-52-73-155-171.compute-1.amazonaws.com',
        user: 'sytszyiaqqhofz',
        password: 'a23556c66084b0897f7bb0e5ebcc7fc95f0b4667a3dbb306c4867329bafe8714',
        database: 'df48je0tlikbml',
        port: 5432,
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = knex;


