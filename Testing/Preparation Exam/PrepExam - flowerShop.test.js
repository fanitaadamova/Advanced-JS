const flowerShop = require('./PrepExam - flowerShop.js');
const { assert, expect } = require('chai');

describe('Checking functionality of object flowerShop', () => {

    describe('method calcPriceOfFlowers(flower, price, quantity)', () => {
        //Test with Invalid input
        it('Invalid input - flower is not a string', () => {
            expect(() => flowerShop.calcPriceOfFlowers(20, 20, 2)).to.throw("Invalid input");
        })
        it('Invalid input - price is not a number', () => {
            expect(() => flowerShop.calcPriceOfFlowers("rose", '20', 2)).to.throw("Invalid input");
        })
        it('Invalid input - quantity is not a number', () => {
            expect(() => flowerShop.calcPriceOfFlowers("rose", 2, '20')).to.throw("Invalid input");
        })
        it('Invalid input - price is not an integer number', () => {
            expect(() => flowerShop.calcPriceOfFlowers("rose", 2.2, 20)).to.throw("Invalid input");
        })
    
        //Test with Valid input
        it('Valid input return result', () => {    
            assert.equal(flowerShop.calcPriceOfFlowers('Rose' , 10, 60), `You need $600.00 to buy Rose!`)
        })

        it('Valid input return result', () => {    
            assert.equal(flowerShop.calcPriceOfFlowers('Rose' , 10, 23), `You need $230.00 to buy Rose!`)
        })
    })

    describe('Method checkFlowersAvailable(flower, gardenArr)', () => {
        //Test with flower > 0
        it('Test with available flower', () => {    
            assert.equal(flowerShop.checkFlowersAvailable("Rose", ["Rose", "Lily", "Orchid"]), `The Rose are available!`)
        })
        //Test with flower= 0
        it('Test with not  available flower', () => {    
            assert.equal(flowerShop.checkFlowersAvailable("Lale", ["Rose", "Lily", "Orchid"]), `The Lale are sold! You need to purchase more!`)
        })


    })

    describe('Method sellFlowers(gardenArr, space)', () => {
        //Test with Invalid input
        it('Invalid input - gardenArr is not an array', () => {
            expect(() => flowerShop.sellFlowers('test', 2)).to.throw("Invalid input");
        })
        it('Invalid input - space is not integer', () => {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], '2')).to.throw("Invalid input");
        })
        it('Invalid input - space is not integer number', () => {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2.2)).to.throw("Invalid input");
        })
        it('Invalid input - space < 0', () => {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -1)).to.throw("Invalid input");
        })
        it('Invalid input - space > array.length', () => {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 5)).to.throw("Invalid input");
        })
        it('Invalid input - space = array.length', () => {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 3)).to.throw("Invalid input");
        })
    
        //Test with Valid input
     
        it('Test with Valid input', () => {
            assert.equal(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1), `Rose / Orchid`)
        })
    })

})