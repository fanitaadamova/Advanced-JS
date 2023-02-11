const expect = require('chai').expect;
const createCalculator = require('./7- add - Subtract.js');

describe('Calculator', () => {
    let calc = null;

    beforeEach(() => {
        calc = createCalculator();
    })
    it('return zero initial value', () => {

        expect(calc.get()).to.equal(0);
    })


    it('can add numbers', () => {
        calc.add(1)
        expect(calc.get()).to.equal(1);
    })

    it('can add more than one numbers', () => {
        calc.add(1)
        calc.add(2)
        expect(calc.get()).to.equal(3);
    })

    it('can subtract numbers', () => {
        calc.subtract(1)
        expect(calc.get()).to.equal(-1);
    })

    it('can subtract more than one numbers', () => {
        calc.subtract(1)
        calc.subtract(1)
        expect(calc.get()).to.equal(-2);
    })

    it('can add and subtract numbers', () => {
        calc.add(2)
        calc.subtract(1)
        expect(calc.get()).to.equal(1);
    })

    it('can add numbers as strings', () => {
        calc.add('2')
        expect(calc.get()).to.equal(2);
    })

    it('can subtract numbers as strings', () => {
        calc.subtract('1')
        expect(calc.get()).to.equal(-1);
    })
})