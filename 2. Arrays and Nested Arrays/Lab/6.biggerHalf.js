function biggerHalf(array) {
    let copiedArray = array.slice();
    let biggerHalf = Math.round(copiedArray.length / 2)
    let result = copiedArray
        .sort((a, b) => a - b)
        .slice(- biggerHalf);

    return result;

}
console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));