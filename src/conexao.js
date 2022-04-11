const { Pool } = require('pg');

const pool = new Pool({
    user: 'sytszyiaqqhofz',
    host: 'ec2-52-73-155-171.compute-1.amazonaws.com',
    database: 'df48je0tlikbml',
    password: 'a23556c66084b0897f7bb0e5ebcc7fc95f0b4667a3dbb306c4867329bafe8714',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
});

const query = (text, param) => {
    return pool.query(text, param);
}

module.exports = {
    query,
    pool
}

