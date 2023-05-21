const connection = require('../db/connection')
const { QueryTypes } = require('sequelize')

async function getAllUsers () {
    const result = await connection.query(
        `SELECT * FROM users`,
        {
            type: QueryTypes.SELECT
        }
    )

    return result
}

module.exports = { getAllUsers }