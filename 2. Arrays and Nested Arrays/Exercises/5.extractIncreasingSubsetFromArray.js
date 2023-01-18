function extractIncreasingSubset(numbers) {

    let biggest = numbers.shift();
    const finalResult = [biggest];

    for (const number of numbers) {
        if (number >= biggest) {
            biggest = number;
            finalResult.push(biggest);
        }
    }

    return finalResult;
}
console.log(extractIncreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]))
console.log(extractIncreasingSubset([1, 2, 3, 4]))
console.log(extractIncreasingSubset([20, 3, 2, 15,6, 1]))
