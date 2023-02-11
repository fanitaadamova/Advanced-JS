const rentCar = require('./PrepExam - rentCar.js');
const { assert, expect } = require('chai');

describe('Checking functionality of objectrentCar', () => {

    describe('method rentCar.searchCar(shop, model) ', () => {
        //Test with Invalid input
        it('Test with invalid array shop', () => {
            expect(() => rentCar.searchCar(20, 'Audi')).to.throw("Invalid input!");
        })
        it('Test with invalid string model', () => {
            expect(() => rentCar.searchCar(['audi'], 20)).to.throw("Invalid input!");
        })

        it('Test with invalid input', () => {
            expect(() => rentCar.searchCar(['audi'])).to.throw("Invalid input!");
        })
        //test with string, not array
        it('test with string, not array', () => {
            expect(() => rentCar.searchCar('audi', 20)).to.throw("Invalid input!");
        })
        //Test with Unmach element
        it('Test with Unmach element', () => {
            expect(() => rentCar.searchCar(['audi'], "BMW")).to.throw("There are no such models in the catalog!");
        })

        //Test with empty array
        it('Test with empty array', () => {
            expect(() => rentCar.searchCar([], "BMW")).to.throw("There are no such models in the catalog!");
        })
        //Test with Valid input 1
        it('Test with Valid input model 1', () => {
            assert.equal(rentCar.searchCar(['Audi', "BMW"], "BMW"), "There is 1 car of model BMW in the catalog!")
        })
        it('Test with Valid input model 2', () => {
            assert.equal(rentCar.searchCar(['Audi', "BMW", "BMW"], "BMW"), `There is 2 car of model BMW in the catalog!`)
        })

    })

    describe('Test Method calculatePriceOfCar(model, days)', () => {
        let catalogue = {
            Volkswagen: 20,
            Audi: 36,
            Toyota: 40,
            BMW: 45,
            Mercedes: 50
        };
        //Test with Invalid input
        it('Test with invalid string model', () => {
            expect(() => rentCar.calculatePriceOfCar(20, 20)).to.throw("Invalid input!");
        })
        it('Test with invalid days number', () => {
            expect(() => rentCar.calculatePriceOfCar('audi', '20')).to.throw("Invalid input!");
        })
        it('Test with invalid days number and string model', () => {
            expect(() => rentCar.calculatePriceOfCar(20, '20')).to.throw("Invalid input!");
        })
        //Test with Valid input Match
        it('Test with Valid input and return message 1', () => {
            assert.equal(rentCar.calculatePriceOfCar('Volkswagen', 15), "You choose Volkswagen and it will cost $300!")
        })
        it('Test with Valid input and return message 2', () => {
            assert.equal(rentCar.calculatePriceOfCar('Volkswagen', 3), "You choose Volkswagen and it will cost $60!")
        })
        //Test with Valid input UNmatch
        it('Test with Valid input and UNmatch', () => {
            expect(() => rentCar.calculatePriceOfCar('Tesla', 3)).to.throw("No such model in the catalog!");
        })
    })

    describe('Test Method checkBudget(costPerDay, days, budget)  ', () => {
        //Test with Invalid input

        it('costPerDay not a number', () => {
            expect(() => rentCar.checkBudget('test', 10, 20)).to.throw("Invalid input!");
        })
        it('costPerDay not a number', () => {
            expect(() => rentCar.checkBudget('test', 10, 20)).to.throw("Invalid input!");
        })
        it('days not a number', () => {
            expect(() => rentCar.checkBudget(5, "test", 3)).to.throw("Invalid input!");
        })
        it('budget not a number', () => {
            expect(() => rentCar.checkBudget(50, 100, "3")).to.throw("Invalid input!");
        })
        it('Missing last parameter', () => {
            expect(() => rentCar.checkBudget(50, 100)).to.throw("Invalid input!");
        })
        it('last parameter is not a number', () => {
            expect(() => rentCar.checkBudget(50, 100, '30')).to.throw("Invalid input!");
        })
        //Test with Valid input
        it('You need a bigger budget!', () => {
            assert.equal(rentCar.checkBudget(10, 5, 20), "You need a bigger budget!")
        })

        it('You rent a car!', () => {
            assert.equal(rentCar.checkBudget(10, 5, 20000), "You rent a car!")
        })

        it('Cost is equal to budjet!', () => {
            assert.equal(rentCar.checkBudget(10, 10, 100), "You rent a car!")
        })
    })

})
