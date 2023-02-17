const motorcycleRider = require('./PrepExam - motorcycleRider.js');
const { assert, expect } = require('chai');

describe('Checking functionality of object motorcycleRider', () => {

    describe('method licenseRestriction(category)', () => {
        //Test with Valid input
        it('category === "AM"', () => {
            assert.equal(motorcycleRider.licenseRestriction("AM"), 'Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.')
        })
        it('category === "A1"', () => {
            assert.equal(motorcycleRider.licenseRestriction("A1"), 'Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.')
        })
        it('category === "A2"', () => {
            assert.equal(motorcycleRider.licenseRestriction("A2"), 'Motorcycles with maximum power of 35KW. and the minimum age is 18.')
        })
        it('category === "A" ', () => {
            assert.equal(motorcycleRider.licenseRestriction("A"), 'No motorcycle restrictions, and the minimum age is 24.')
        })
        //Test with Invalid input
        it('Invalid category', () => {
            expect(() => motorcycleRider.licenseRestriction('test')).to.throw("Invalid Information!");
        })
    })

    describe('method motorcycleShowroom (engineVolume, maximumEngineVolume) ', () => {
        //Test with Invalid input
        it('engineVolume is not an array', () => {
            expect(() => motorcycleRider.motorcycleShowroom('test', 2)).to.throw("Invalid Information!");
        })
        it('maximumEngineVolume is not a number', () => {
            expect(() => motorcycleRider.motorcycleShowroom(["125", "250", "600"], '10')).to.throw("Invalid Information!");
        })
        it('engineVolume.length < 1', () => {
            expect(() => motorcycleRider.motorcycleShowroom([], 51)).to.throw("Invalid Information!");
        })
        it('maximumEngineVolume < 50', () => {
            expect(() => motorcycleRider.motorcycleShowroom(["125", "250", "600"], 49)).to.throw("Invalid Information!");
        })
        //Test with Valid input
        it('1', () => {
            assert.equal(motorcycleRider.motorcycleShowroom(["125", "250", "600"], 125), `There are 1 available motorcycles matching your criteria!`)
        })
        it('2', () => {
            assert.equal(motorcycleRider.motorcycleShowroom(["125", "250", "600"], 120), `There are 0 available motorcycles matching your criteria!`)
        })
        it('3', () => {
            assert.equal(motorcycleRider.motorcycleShowroom(["125", "250", "600"], 300), `There are 2 available motorcycles matching your criteria!`)
        })
        it('4', () => {
            assert.equal(motorcycleRider.motorcycleShowroom(["50", "250", "600"], 300), `There are 2 available motorcycles matching your criteria!`)
        })

    })

    describe('method otherSpendings(equipment, consumables, discount) ', () => {

        //Test with Invalid input
        it('equipment is not an array', () => {
            expect(() => motorcycleRider.otherSpendings(['test'], 'test', true)).to.throw("Invalid Information!");
        })
        it('consumables is not an array', () => {
            expect(() => motorcycleRider.otherSpendings('test', ['test'], true)).to.throw("Invalid Information!");
        })
        it('discount is not a boolean', () => {
            expect(() => motorcycleRider.otherSpendings(['test'], ['test'], 'test')).to.throw("Invalid Information!");
        })
        //Test with Valid input
            it('1', () => {
                assert.equal(motorcycleRider.otherSpendings(["helmet","jacked"], ["engine oil", "oil filter"], true), `You spend $540.00 for equipment and consumables with 10% discount!`)
            })
            it('2', () => {
                assert.equal(motorcycleRider.otherSpendings(["helmet","jacked"], ["engine oil", "oil filter"], false), `You spend $600.00 for equipment and consumables!`)
            })
            it('3', () => {
                assert.equal(motorcycleRider.otherSpendings(["test","jacked"], ["engine oil", "oil filter"], true), `You spend $360.00 for equipment and consumables with 10% discount!`)
            })
            it('4', () => {
                assert.equal(motorcycleRider.otherSpendings(["test","jacked"], ["engine oil", "oil filter"], false), `You spend $400.00 for equipment and consumables!`)
            })
        
    })

})