function printElementFromArray(array, number) {
/*
    let result = [];
    for (let index = 0; index < array.length; index += number) {
        result.push(array[index])
    }

    return result */
    return array.filter((_, index) => index % number == 0)

}
console.log(printElementFromArray(['5', '20', '31', '4', '20'],
    2))

console.log(printElementFromArray(['dsa', 'asd', 'test', 'tset'],
    2))
