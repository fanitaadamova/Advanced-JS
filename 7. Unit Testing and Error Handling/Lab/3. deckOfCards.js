function printDeckOfCards(cards) {

    // My desicion
    let deskResult = []

    for (const line of cards) {
        let lineArray = line.split('')
        let suit = lineArray.pop();
        let face = lineArray.join('')

        try {
            const currentCard = cardFactory(face, suit);
            deskResult.push(currentCard);
        } catch (error) {
            return console.log(`Invalid card: ${line}`)
        }
    }

    console.log(deskResult.join(' '));

    // Use the solution from the previous task 
    function cardFactory(face, suit) {

        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {
            S: '\u2660',
            H: '\u2665 ',
            D: '\u2666',
            C: '\u2663'
        };

        if (faces.includes(face) == false) {
            throw new TypeError('Invalid face')
        } else if (suits.hasOwnProperty(suit) == false) {
            throw new TypeError('Invalid suit')
        }

        let result = {
            face,
            suit,
            toString() {
                return this.face + suits[this.suit]
            }
        }
        return result
    }


}

printDeckOfCards(['AS', '10D', 'KH', '2C'])
printDeckOfCards(['5S', '3D', 'QD', '1C'])
