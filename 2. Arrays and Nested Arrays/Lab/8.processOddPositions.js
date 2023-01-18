/*You are given an array of numbers. Write a JS function that returns 
the elements at odd positions from the array, doubled and in reverse order.*/

function odd(arr) {

    let result = arr
        .filter((x, i) => i % 2 == 1)
        .map(a => a * 2)
        .reverse();

    return result
}
console.log(odd([10, 15, 20, 25]))