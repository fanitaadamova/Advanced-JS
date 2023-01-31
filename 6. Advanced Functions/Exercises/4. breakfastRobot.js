function solution() {

    let library = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, flavour: 3, fat: 7 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }

    };

    let storedElemets = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };
    //create function manager and parameter will be string
    function manager(string) {
        let [command, action, quantity] = string.split(' ');
        quantity = Number(quantity);

        if (command === 'prepare') {
            //the recipe is an object - some value of library
            let recipe = library[action];
            for (const element in recipe) {
                if (recipe[element] * quantity > storedElemets[element]) {
                    return `Error: not enough ${element} in stock`
                }
            }
            for (const element in recipe) {
                storedElemets[element] -= recipe[element] * quantity;
            }
            return 'Success'
        } else if (command === 'restock') {
            storedElemets[action] += quantity;
            return 'Success'
        } else if (command === 'report') {
            let result = [];
            for (const element in storedElemets) {
                result.push(`${element}=${storedElemets[element]}`)
            }
            return result.join(' ')
        }

    }
    //return function manager
    return manager

}

let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log(manager("report"))
