
/*Write a program that performs different operations on an array of elements. Implement the following operations:
•	Sum(ai) - calculates the sum of all elements from the input array
•	Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array
•	Concat(ai) - concatenates the string representations of all elements from the array
*/

function aggregateElements(array) {

    console.log(array.reduce((a, b) => a + b, 0));
    console.log(array.reduce((a, b) => a + 1 / b, 0));
    console.log(array.reduce((a, b) => a + b, ''));
}
aggregateElements([1, 2, 3])
aggregateElements([2, 4, 8, 16])