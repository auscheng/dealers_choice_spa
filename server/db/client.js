const Sequelize = require('sequelize');
const postgresConnParams = {
    hostname: 'localhost',
    port: 5432,
    database: 'acme_express_spa',
    dialect: 'postgres',
    username: 'postgres',
    password: '12345',
};
const postgresConnURL = 'postgres://postgres:12345@localhost:5432/acme_express_spa';

const client = new Sequelize(
    process.env.DATABASE_URL || postgresConnURL || postgresConnParams,
    {
        logging: false
    }
);

module.exports = client;