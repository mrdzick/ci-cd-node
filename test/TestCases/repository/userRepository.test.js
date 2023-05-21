const { getAllUsers } = require('../../../src/repository/userRepository')
const UsersTableTestHelper = require('../../Helper/TableTestHelper/UsersTableTestHelper')

describe('getAllUsers', () => {
    afterEach(async () => {
        await UsersTableTestHelper.cleanTable()
    })

    it('should return right result', async () => {
        // Arrange
        await UsersTableTestHelper.insertData({})

        // Action
        const result = await getAllUsers()

        // Assert
        expect(result).toHaveLength(1)
    })
})