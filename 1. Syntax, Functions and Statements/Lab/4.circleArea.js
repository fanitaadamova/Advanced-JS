function circleAre(radius) {
    let result;

    if (typeof radius == 'number') {
        // radius на степен 2
        result = radius ** 2 * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof radius}.`);
    }

}
circleAre(5)
circleAre('name')