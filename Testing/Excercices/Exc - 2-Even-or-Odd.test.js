const { assert } = require('chai');
const isOddOrEven = require('./Exc - 2-Even-or-Odd.js');

describe('Checks whether the length of a passed string is even or odd', () => {

    it('Should input as a sting', () => {
        assert.equal(isOddOrEven(5), undefined)
    })

    it('Checking for even', () => {
        assert.equal(isOddOrEven('test'), 'even')
    })

    it('Checking for odd', () => {
        assert.equal(isOddOrEven('tes'), 'odd')
    })

    it('Checking for empty string', () => {
        assert.equal(isOddOrEven(''), 'even')
    })
     
})