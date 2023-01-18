function greatestCommonDivisor(num1, num2) {
    
    while(num2) {
        let t = num2;
        num2 = num1 % num2;
        num1 = t;
      }
      return num1;
     
}
console.log(greatestCommonDivisor(15, 5))
greatestCommonDivisor(2154, 458)