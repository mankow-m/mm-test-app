import { testFunction } from './test'

describe('test suite', () => {
    test('testFunction', () => {
        expect(testFunction()).toBe('costam cos tam');
    })
})