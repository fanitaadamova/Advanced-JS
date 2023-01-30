function calorieObject(arr) {
    let obj = {};

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        const calories = Number(arr[index + 1]);

        if (index % 2 === 0) obj[element] = calories
    }

    console.log(obj);

}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])