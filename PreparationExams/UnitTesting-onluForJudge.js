describe('Checking functionality of object', () => {

    describe('method calcPriceOfBook', () => {
        //Test with Invalid input
        it('Invalid input - name of the boook', () => {
            expect(() => library.calcPriceOfBook(20, 20)).to.throw("Invalid input");
        })

        it('Invalid input - year', () => {
            expect(() => library.calcPriceOfBook('Test', "20")).to.throw("Invalid input");
        })
        //Test with Valid input
        it('Valid input - 1950 year', () => {
            assert.equal(library.calcPriceOfBook("nameOfBook", 1950), 'Price of nameOfBook is 10.00')
        })
        it('Valid input - 1980 year', () => {
            assert.equal(library.calcPriceOfBook("nameOfBook", 1980), 'Price of nameOfBook is 10.00')
        })
        it('Valid input - 2000 year', () => {
            assert.equal(library.calcPriceOfBook("nameOfBook", 2000), 'Price of nameOfBook is 20.00')
        })

    })

    describe('method findBook', () => {
        //Test with Invalid input
        it('Invalid input - empty array', () => {
            expect(() => library.findBook([], 'Troy')).to.throw("No books currently available");
        })

        //Test with Valid input
        it('Valid input - Troy', () => {
            assert.equal(library.findBook(["Troy", "Life Style"], 'Troy'), "We found the book you want.")
        })

        it('Valid input - The book is not here', () => {
            assert.equal(library.findBook(["Troy", "Life Style"], 'Love is love'), "The book you are looking for is not here!")
        })

    })

    describe('method arrangeTheBooks ', () => {

        //Test with Invalid input
        it('Invalid input - countBooks is not a number', () => {
            expect(() => library.arrangeTheBooks('20')).to.throw("Invalid input");
        })

        it('Invalid input - 1', () => {
            expect(() => library.arrangeTheBooks(-1)).to.throw("Invalid input");
        })

        //Test with Valid input
        it('Valid input - 6', () => {
            assert.equal(library.arrangeTheBooks(6), "Great job, the books are arranged.")
        })

        it('Valid input - 6', () => {
            assert.equal(library.arrangeTheBooks(45), "Insufficient space, more shelves need to be purchased.")
        })
    })

})