function subSum(numbers, start, end) {
    //	If the first element is not an array, return NaN
    if (!Array.isArray(numbers)) {
        return NaN
    }

    //If the start index is less than zero, consider its value to be a zero
    let startIndex = Math.max(0, start);
    //If the end index is outside the bounds of the array, assume it points to the last index of the array
    let endIndex = Math.min(end, numbers.length - 1);

    let subNumbers = numbers.slice(startIndex, endIndex + 1);

    let sum = subNumbers.reduce((a, x) => a + Number(x), 0);
    return sum


}
console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300))