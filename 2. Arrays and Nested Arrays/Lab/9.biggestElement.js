function biggestElement(matrix) {

    let biggestNumber = Number.MIN_SAFE_INTEGER;

    for (const row of matrix) {

        for (const element of row) {
            if (element > biggestNumber) {
                biggestNumber = element;
            }
        }
    }

    return biggestNumber;

}
console.log(biggestElement([[20, 50, 10],
[8, 33, 145]]))

console.log(biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]))