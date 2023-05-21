const Sequelize = require('sequelize')

const {
    development,
    test,
    production
} = require('../../config/config')

let dbCredentials = development // Will be used development env as default

switch (process.env.NODE_ENV) {
    case 'test':
        dbCredentials = test
        break;
    case 'development':
        dbCredentials = development
        break;
    case 'production':
        dbCredentials = production
        break;
    default:
        throw new Error('Invalid Environment!')
}

const connection = new Sequelize(
    dbCredentials.database,
    dbCredentials.username,
    dbCredentials.password,
    {
        host: dbCredentials.host,
        dialect: dbCredentials.dialect
    }
)

module.exports = connection