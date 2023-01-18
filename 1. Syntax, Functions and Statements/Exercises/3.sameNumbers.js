function sameNumbers(number) {

    let isSame = true;
    let sum = 0;
    let arrayOfNumber = number
    .toString()
    .split('')
    .map(n => Number(n));

    let firstElement = arrayOfNumber[0];

      for (const element of arrayOfNumber) {
          if (firstElement !== element) {
            isSame = false;
          }
          sum+=element;
      } 

    console.log(isSame);
    console.log(sum);

}
sameNumbers(2222222)
sameNumbers(1234)