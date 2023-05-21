const { sum } = require('./sum')

describe('sum function', () => {
    it('should return the right result', () => {
        // Arrange
        const a = 1
        const b = 2

        // Action
        const result = sum(a, b)

        // Assert
        const expectedResult = 3

        expect(result).toBe(expectedResult)
    })
})
