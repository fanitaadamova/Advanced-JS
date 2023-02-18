const findNewApartment = require('./exam.js');
const { assert, expect } = require('chai');

describe('Checking functionality of object  findNewApartment', () => {

    describe('method  isGoodLocation(city, nearPublicTransportation)', () => {
        //Test with Invalid input
        it('nearPublicTransportation is not a boolean', () => {
            expect(() => findNewApartment.isGoodLocation('Sofia', 5)).to.throw("Invalid input!");
        })
        it('city is not a string', () => {
            expect(() => findNewApartment.isGoodLocation(5, true)).to.throw("Invalid input!");
        }) 
        it('city is not a string', () => {
            expect(() => findNewApartment.isGoodLocation(['Sofia'], true)).to.throw("Invalid input!");
        })     
        //Test with Valid input
        it('This location is not suitable for you.', () => {
            assert.equal(findNewApartment.isGoodLocation("Laki", true), "This location is not suitable for you.")
        })
        it('There is no public transport in area.', () => {
            assert.equal(findNewApartment.isGoodLocation('Sofia', false), "There is no public transport in area.")
        })
        it('"You can go on home tour!" ', () => {
            assert.equal(findNewApartment.isGoodLocation('Plovdiv', true), "You can go on home tour!" )
        })

    })

    describe('method isLargeEnough(apartments, minimalSquareMeters)', () => {
        //Test with Invalid input
        it('apartments is not array', () => {
            expect(() => findNewApartment.isLargeEnough('Sofia', 5)).to.throw("Invalid input!");
        })
        it('minimalSquareMeters is not a number', () => {
            expect(() => findNewApartment.isLargeEnough([40, 50, 60], "5")).to.throw("Invalid input!");
        })
        it('apartments is empty array', () => {
            expect(() => findNewApartment.isLargeEnough([], "5")).to.throw("Invalid input!");
        })
        //Test with Valid input

        it('1 ', () => {
            assert.equal(findNewApartment.isLargeEnough([40, 50, 60], 40), "40, 50, 60" )
        })
        it(' 2', () => {
            assert.equal(findNewApartment.isLargeEnough([40, 50, 60], 39), "40, 50, 60" )
        })
        it('3', () => {
            assert.equal(findNewApartment.isLargeEnough([40, 50, 60], 50), "50, 60" )
        })
        it(' 4', () => {
            assert.equal(findNewApartment.isLargeEnough([40, 50, 60], 61), "" )
        })
    })

    describe('method isItAffordable (price, budget', () => {

        //Test with Invalid input
        it('price is not a number', () => {
            expect(() => findNewApartment.isItAffordable('Sofia', 5)).to.throw("Invalid input!");
        })
        it('budget is not a number', () => {
            expect(() => findNewApartment.isItAffordable(5,'Sofia')).to.throw("Invalid input!");
        })
        it('budget is 0', () => {
            expect(() => findNewApartment.isItAffordable(0,0)).to.throw("Invalid input!");
        })
        it('less than 0', () => {
            expect(() => findNewApartment.isItAffordable(-1,-2)).to.throw("Invalid input!");
        })
        //Test with Valid input
     
        it('1 ', () => {
            assert.equal(findNewApartment.isItAffordable(1000, 200), "You don't have enough money for this house!" )
        })
        it('2 ', () => {
            assert.equal(findNewApartment.isItAffordable(1000, 2000), "You can afford this home!" )
        })
    })

})