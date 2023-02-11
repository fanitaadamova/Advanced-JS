const { assert } = require('chai');
const lookupChar = require('./Exc - 3-Char-Lookup.js');

describe('Checks a function that retrieves a character at a given index from a string', () => {

    it('Should input as a sting', () => {
        assert.equal(lookupChar(5, 5), undefined)
    })
  
    it('Should input as a sting', () => {
        assert.equal(lookupChar({}), undefined)
    })

    it('Should string with index', () => {
        assert.equal(lookupChar(5), undefined)
    })
    it('Should string with index', () => {
        assert.equal(lookupChar('test'), undefined)
    })

    it('Should string with index', () => {
        assert.equal(lookupChar(2,'test'), undefined)
    })
    it('Should input as a sting', () => {
        assert.equal(lookupChar(undefined, 2), undefined)
    })
    it('Should input as a sting', () => {
        assert.equal(lookupChar(undefined, null), undefined)
    })
    it('Should input as a sting', () => {
        assert.equal(lookupChar('test', null), undefined)
    })
    it('Should input as a sting', () => {
        assert.equal(lookupChar([5], 0), undefined)
    })
    it('Should input as a sting', () => {
        assert.equal(lookupChar(['5'], 0), undefined)
    })

    it('Should index as a number', () => {
        assert.equal(lookupChar('test', '2'), undefined)
    })

     it('Should input as a sting', () => {
        assert.equal(lookupChar(5, '5'), undefined)
    })

    it('Should index as a number', () => {
        assert.equal(lookupChar('test', '2'), undefined)
    })
    it('Should index to be whole number', () => {
        assert.equal(lookupChar('test', 2.5), undefined)
    })
    it('Should index to be correct', () => {
        assert.equal(lookupChar('test', -1), "Incorrect index")
    })
  
    it('Should index to be correct', () => {
        assert.equal(lookupChar('test', 8), "Incorrect index")
    })
    it('Should index to be correct', () => {
        assert.equal(lookupChar('test', 4), "Incorrect index")
    })

    it('Return the character at the specified index in the string.', () => {
        assert.equal(lookupChar('test', 1), "e")
    })
     
    it('Return the character at the specified index in the string.', () => {
        assert.equal(lookupChar('test2', 0), "t")
    })

    it('Return the character at the specified index in the string.', () => {
        assert.equal(lookupChar('test2', 4), "2")
    })

})