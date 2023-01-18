function squareOfStars(number) {

    if (typeof number === 'undefined') {
        number = 5;
    }

    for (let index = 0; index < number; index++) {
        let result = '* '.repeat(number)
        console.log(result);

    }

}
squareOfStars(4)