import { fiboN } from './fibonacci.js'

describe('FiboN test suite', () => {

    test('n = 0, no data generated', () => {
        const data = [...fiboN(0)]
        expect(data).toHaveLength(0)
    })

    test('n = 1, generates value 0', () => {
        const data = [...fiboN(1)]
        expect(data).toHaveLength(1)
        expect(data[0]).toBe(0)
    })

    test('n = 2, generates value 0, 1', () => {
        const data = [...fiboN(2)]
        expect(data).toHaveLength(2)
        expect(data).toEqual([0, 1])
    })

    test('n = 7, generates value 0, 1, 1 ,2, 3, 5, 8', () => {
        const data = [...fiboN(7)]
        expect(data).toHaveLength(7)
        expect(data).toEqual([0, 1, 1 ,2, 3, 5, 8])
    })
})