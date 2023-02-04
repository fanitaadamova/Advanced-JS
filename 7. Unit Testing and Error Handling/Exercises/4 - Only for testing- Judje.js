describe('mathEnforcer function tests', () => {
    describe('addFive function tests', () => {
        //Tests with uncorrect input
        it('Should return undefined with string', () => {
            assert(mathEnforcer.addFive('Test') === undefined)
        });
        it('Should return undefined with array', () => {
            assert(mathEnforcer.addFive([]) === undefined)
        });
        it('Should return undefined with object', () => {
            assert(mathEnforcer.addFive({}) === undefined)
        });
        it('Should return undefined with undefined', () => {
            assert(mathEnforcer.addFive(undefined) === undefined)
        });
        it('Should return undefined with null', () => {
            assert(mathEnforcer.addFive(null) === undefined)
        });

        //Tests with correct input
        it('Positive integer number + 5', () => {
            assert(mathEnforcer.addFive(5) === 10)
        });
        it('Negative integer number + 5', () => {
            assert(mathEnforcer.addFive(-5) === 0)
        });
        it('Decimal number + 5.5', () => {
            assert(mathEnforcer.addFive(5.5) === 10.5)
        });
    })

    describe('subtractTen function tests', () => {

        //Tests with uncorrect input
        it('Should return undefined with string', () => {
            assert(mathEnforcer.subtractTen('Test') === undefined)
        });
        it('Should return undefined with array', () => {
            assert(mathEnforcer.subtractTen([]) === undefined)
        });
        it('Should return undefined with object', () => {
            assert(mathEnforcer.subtractTen({}) === undefined)
        });
        it('Should return undefined with undefined', () => {
            assert(mathEnforcer.subtractTen(undefined) === undefined)
        });
        it('Should return undefined with null', () => {
            assert(mathEnforcer.subtractTen(null) === undefined)
        });

        //Tests with correct input
        it('Positive integer number -10', () => {
            assert(mathEnforcer.subtractTen(5) === -5)
        });
        it('Negative integer number -10', () => {
            assert(mathEnforcer.subtractTen(-5) === -15)
        });
        it('Decimal number -10', () => {
            assert(mathEnforcer.subtractTen(5.5) === -4.5)
        });
    })

    describe('sum function tests', () => {
        it('Two positive integer numbers', () => {
            assert(mathEnforcer.sum(5, 6) ===  11)
        })

        it('Two positive decimal numbers', () => {
            assert(mathEnforcer.sum(5.5, 6.5) ===  12)
        })

        it('Two positive - one decimal one integer numbers', () => {
            assert(mathEnforcer.sum(5, 6.5) ===  11.5)
        })
        it('Two negatives numbers', () => {
            assert(mathEnforcer.sum(-5, -6) ===  -11)
        })
        it('One negative and one positive numbers', () => {
            assert(mathEnforcer.sum(-5, 6) ===  1)
        })
        it('One negative and one positive numbers', () => {
            assert(mathEnforcer.sum(5, -6) ===  -1)
        })

        //Testing with uncorrect inputs

        it('first parameter string, second number', () => {
            assert(mathEnforcer.sum('', 20) === undefined)
        });
        it('first parameter number, second string', () => {
            assert(mathEnforcer.sum(10, '20') === undefined)
        });
        

    })
})