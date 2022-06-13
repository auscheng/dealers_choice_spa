const Sequelize = require('sequelize');
const postgresConnParams = {
    hostname: 'localhost',
    port: 5432,
    database: 'test',
    dialect: 'postgres',
    username: 'postgres',
    password: '12345',
};
const postgresConnURL = 'postgres://postgres:12345@localhost:5432/test';

const client = new Sequelize(
    process.env.DATABASE_URL || postgresConnURL || postgresConnParams,
    {
        logging: false
    }
);

module.exports = client;