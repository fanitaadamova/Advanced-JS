function sumFirstLast(array) {
    
    const firstElement = Number(array[0]);
    const lastElement = Number(array[array.length - 1]);
    const sum = firstElement + lastElement;
  
    return sum;

}
console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));