const mySQL = require('mysql');

const connection = mySQL.createConnection(
    {
        host: 'localhost',
        user: 'dbuser',
        password: 's3kreee7',
        database: 'my_db'
    }
);

connection.connect();

module.exports = connection;
