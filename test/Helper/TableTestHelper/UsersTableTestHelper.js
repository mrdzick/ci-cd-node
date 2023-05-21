const { Sequelize, DataTypes } = require('sequelize')
const { test } = require('../../../config/config')

const connection = new Sequelize(
    test.database,
    test.username,
    test.password,
    {
        dialect: test.dialect,
        host: test.host
    }
)

const User = require('../../../database_migrations/models/user')(connection, DataTypes)

const UsersTableTestHelper = {
    async insertData ({
        firstName = 'Jhon',
        lastName = 'Doe',
        age = 20
    }) {
        await User.create({
            first_name: firstName,
            last_name: lastName,
            age: age
        })
    },

    async cleanTable () {
        await User.destroy({
            where: {}
        })
    }
}

module.exports = UsersTableTestHelper