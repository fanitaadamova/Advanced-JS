function lastNumSequence(n, k) {
    let array = [1];

    for (let index = 1; index < n; index++) {

        let arrayOfKElements = array.slice(- k)
        let sum = arrayOfKElements.reduce((a, b) => a + b, 0);
        array.push(sum)

    }

    return array
}
console.log(lastNumSequence(6, 3))
console.log(lastNumSequence(8, 2))