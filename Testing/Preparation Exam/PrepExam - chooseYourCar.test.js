const chooseYourCar = require('./PrepExam - chooseYourCar.js');
const { assert, expect } = require('chai');

describe('Checking functionality of object chooseYourCar', () => {

    describe('method choosingType(type, color, year)', () => {
        //Test with Invalid input
        it('year < 1900 ', () => {
            expect(() => chooseYourCar.choosingType('Sedan', 'red', 1899)).to.throw("Invalid Year!");
        })
        it('year > 2022', () => {
            expect(() => chooseYourCar.choosingType('Sedan', 'red', 2023)).to.throw("Invalid Year!");
        })
        it('type is not a Sedan', () => {
            expect(() => chooseYourCar.choosingType('Test', 'red', 2021)).to.throw("This type of car is not what you are looking for.");
        })
        //Test with Valid input
        it('test with year 2010', () => {
            assert.equal(chooseYourCar.choosingType('Sedan', 'red', 2010), `This red Sedan meets the requirements, that you have.`)
        })
        it('test with year 2011', () => {
            assert.equal(chooseYourCar.choosingType('Sedan', 'red', 2011), `This red Sedan meets the requirements, that you have.`)
        })
        it('test with year 2009', () => {
            assert.equal(chooseYourCar.choosingType('Sedan', 'red', 2009), `This Sedan is too old for you, especially with that red color.`)
        })

    })

    describe('metod brandName (brands, brandIndex)', () => {
        //Test with Invalid input
        it('brands is not array', () => {
            expect(() => chooseYourCar.brandName('test', 2)).to.throw("Invalid Information!");
        })
        it('brandIndex is not a number', () => {
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], '2')).to.throw("Invalid Information!");
        })
        it('brandIndex is outside the limits of the array 6', () => {
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 6)).to.throw("Invalid Information!");
        })
        it('brandIndex is outside the limits of the array - 1', () => {
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -1)).to.throw("Invalid Information!");
        })
        //Test with Valid input
        it('Test with Valid input', () => {
            assert.equal(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1), `BMW, Peugeot`)
        })
        it('Test with Valid input', () => {
            assert.equal(chooseYourCar.brandName(["BMW", "Toyota"], 1), `BMW`)
        })
    })

    describe('method carFuelConsumption(distanceInKilometers, consumptedFuelInLitres) ', () => {

        //Test with Invalid input
        it('distanceInKilometers is not a number', () => {
            expect(() => chooseYourCar.carFuelConsumption('10', 10)).to.throw("Invalid Information!");
        })
        it('consumptedFuelInLitres is not a number', () => {
            expect(() => chooseYourCar.carFuelConsumption(10, '10')).to.throw("Invalid Information!");
        })
        it('distanceInKilometers is negative', () => {
            expect(() => chooseYourCar.carFuelConsumption(-1, 10)).to.throw("Invalid Information!");
        })
        it('consumptedFuelInLitres is negative', () => {
            expect(() => chooseYourCar.carFuelConsumption(10, -1)).to.throw("Invalid Information!");
        })
        it('consumptedFuelInLitres is negative', () => {
            expect(() => chooseYourCar.carFuelConsumption(10, 0)).to.throw("Invalid Information!");
        })
        it('consumptedFuelInLitres is negative', () => {
            expect(() => chooseYourCar.carFuelConsumption(0, 10)).to.throw("Invalid Information!");
        })
        //Test with Valid input

        it('100, 6', () => {
            assert.equal(chooseYourCar.carFuelConsumption(100,6), `The car is efficient enough, it burns 6.00 liters/100 km.`)
        })

        it('100, 7', () => {
            assert.equal(chooseYourCar.carFuelConsumption(100,7), `The car is efficient enough, it burns 7.00 liters/100 km.`)
        })
        it('100, 8', () => {
            assert.equal(chooseYourCar.carFuelConsumption(100,8), `The car burns too much fuel - 8.00 liters!`)
        })
        it('96, 6', () => {
            assert.equal(chooseYourCar.carFuelConsumption(96,6), `The car is efficient enough, it burns 6.25 liters/100 km.`)
        })
    })

})