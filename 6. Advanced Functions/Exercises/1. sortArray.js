function sortArray(input, command) {

    const obj = {
        asc,
        desc
    }

    return obj[command](input)

    function asc(input) {
        return input.sort((a, b) => a - b)
    }

    function desc(input) {
        return input.sort((a, b) => b - a)
    }


}
console.log(sortArray([14, 7, 17, 6, 8], 'asc'))
console.log(sortArray([14, 7, 17, 6, 8], 'desc'))