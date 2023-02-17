class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw new Error('Not enough space in the collection.')
        }

        this.books.push({
            bookName,
            bookAuthor,
            payed: false
        })
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        let findBook = this.books.find(object => object.bookName === bookName);
        if (findBook === undefined) {
            throw new Error(`${bookName} is not in the collection.`)
        }
        if (findBook.payed === true) {
            throw new Error(`${bookName} has already been paid.`)
        }
        for (const object of this.books) {
            if (object.bookName === bookName) {
                object.payed = true;
            }
        }
        return `${bookName} has been successfully paid.`
    }

    removeBook(bookName) {
        let findBook = this.books.find(object => object.bookName === bookName);
        if (findBook === undefined) {
            throw new Error('The book, you\'re looking for, is not found.')
        }
        if (findBook.payed === false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }

        this.books = this.books.filter(object => object.bookName !== bookName);
        return `${bookName} remove from the collection.`
    }

    getStatistics(bookAuthor) {
        const result = [];
        if (bookAuthor) {
            const wantedAuthor = this.books.filter(a => a.bookAuthor === bookAuthor);
            if (wantedAuthor.length === 0) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }

            wantedAuthor.forEach(object => result.push(`${object.bookName} == ${bookAuthor} - ${object.payed === true ? 'Has Paid' : 'Not Paid'}.`));
            return result.join('\n')

        }

        result.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`)
        this.books
            .sort((a, b) => a.bookName.localeCompare(b.bookName))
            .forEach(object => result.push(`${object.bookName} == ${object.bookAuthor} - ${object.payed === true ? 'Has Paid' : 'Not Paid'}.`));

        return result.join('\n')

    }
}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());




