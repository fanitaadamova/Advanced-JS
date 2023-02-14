const carService = require('./PrepExam - carService.js');
const { assert, expect } = require('chai');

describe('Checking functionality of object carService', () => {

    describe('Test method isItExpensive(issue)', () => {
        //Test with Match input
        it('test with issue === "Engine"', () => {
            assert.equal(carService.isItExpensive("Engine"), `The issue with the car is more severe and it will cost more money`)
        })

        it('test with issue === "Transmission"', () => {
            assert.equal(carService.isItExpensive("Transmission"), `The issue with the car is more severe and it will cost more money`)
        })

        //Test with Unmatch input
        it('test with issue === "Test"', () => {
            assert.equal(carService.isItExpensive("Test"), `The overall price will be a bit cheaper`)
        })
    })

    describe('Test method discount(numberOfParts, totalPrice)', () => {
        //Test with Invalid input
        it('Invalid input - if one of parameter is not a number', () => {
            expect(() => carService.discount(10, '10')).to.throw("Invalid input");
        })
        it('Invalid input - if one of parameter is not a number', () => {
            expect(() => carService.discount('Test', '10')).to.throw("Invalid input");
        })
        it('Invalid input - if one of parameter is not a number', () => {
            expect(() => carService.discount('Test', 10)).to.throw("Invalid input");
        })

        //Test with Valid input
        it('test with numberOfParts == 1', () => {
            assert.equal(carService.discount(1, 10), "You cannot apply a discount")
        })
        it('test with numberOfParts == 2', () => {
            assert.equal(carService.discount(2, 10), "You cannot apply a discount")
        })

        it('test with numberOfParts == 3', () => {
            assert.equal(carService.discount(3, 10), "Discount applied! You saved 1.5$")
        })

        it('test with numberOfParts == 7', () => {
            assert.equal(carService.discount(7, 10), "Discount applied! You saved 1.5$")
        })
        it('test with numberOfParts == 8', () => {
            assert.equal(carService.discount(8, 10), "Discount applied! You saved 3$")
        })

    })

    describe('Test method partsToBuy(partsCatalog, neededParts)', () => {

        //Test with Invalid input
        it('Invalid input - if one of parameter is not an array', () => {
            expect(() => carService.partsToBuy(10, '10')).to.throw("Invalid input");
        })
        it('Invalid input - if one of parameter is not an array', () => {
            expect(() => carService.partsToBuy([10, 30], '10')).to.throw("Invalid input");
        })
        it('Invalid input - if one of parameter is not an array', () => {
            expect(() => carService.partsToBuy(10, [10, 30])).to.throw("Invalid input");
        })
        //Test with Valid input

        it('Valid input return sum 145 - blowoff valve', () => {    
            assert.equal(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "injectors"]), `145`)
        })

        it('Valid input return sum 230 - coil springs', () => {    
            assert.equal(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["coil springs"]), `230`)
        })

        it('Valid input return sum 0 - coil, beacause there is no part with such name', () => {    
            assert.equal(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["coil"]), `0`)
        })
    })

    

})