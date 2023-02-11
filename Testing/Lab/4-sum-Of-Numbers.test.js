const expect = require('chai').expect;
const sum = require('./4-sum-Of-Numbers.js');

describe('Sum of numbers', ()=>{
    it('Should return the sum of numbers in the array', ()=>{

        let numbers = [1,2,3,4,5];
        let actualSum = sum(numbers);
        let expectedSum = 15;
        expect(actualSum).to.be.equal(expectedSum);
    })

    it('Should return the sum of numbers in the array', ()=>{

        let numbers = [5,5,5,2,3];
        let actualSum = sum(numbers);
        let expectedSum = 20;
        expect(actualSum).to.be.equal(expectedSum);
    })

})