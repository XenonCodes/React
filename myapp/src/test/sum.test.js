const sum = require('./sum')

describe('sum', () => {
    test( 'Тест функции сложения(верно)', ()=> {
        expect(sum(5, 5)).toBe(10)
    })
    test( 'Тест функции сложения(строка)', ()=> {
        expect(sum("ы", 5)).toBe("ы5")
    })
})