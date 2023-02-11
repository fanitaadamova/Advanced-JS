const expect = require('chai').expect;
const isSymmetric = require('./5-check-for-Symmetry.js');

describe('Check array for symmetry', () => {

    it('Should array to be symmetric', () => {
        let arr = [1, 2, 2, 1];
        expect(isSymmetric(arr)).to.be.true;
    })

    it('Should array not to be symmetric', () => {
        let arr = [1, 2, 3, 4, 5];
        expect(isSymmetric(arr)).to.be.false;
    })

    it('Non-array are non-symmetric', () => {
        let data = 5;
        expect(isSymmetric(data)).to.be.false;
    })
    //First border case
    it('returns true when lenght is odd', () => {
        let arr = [1, 2, 1];
        expect(isSymmetric(arr)).to.be.true;
    })
    //Second border case
    it('returns false for array-like arguments', () => {
        let data = '1221';
        expect(isSymmetric(data)).to.be.false;
    })

    it('work with symetric string array', () => {
        let arr = ['a', 'b', 'b', 'a'];
        expect(isSymmetric(arr)).to.be.true;
    })

    it('returns false for type mistmatch element', () => {
        let arr = [1, 2, '1'];
        expect(isSymmetric(arr)).to.be.false;
    })
})