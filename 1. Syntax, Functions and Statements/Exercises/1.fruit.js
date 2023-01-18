function fruit(typeOfFruit, weightOfFruit, priceOfFruit) {

    let weightInKg = weightOfFruit / 1000;
    let money = priceOfFruit * weightInKg;


    console.log(`I need $${money.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${typeOfFruit}.`);
}
fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);

