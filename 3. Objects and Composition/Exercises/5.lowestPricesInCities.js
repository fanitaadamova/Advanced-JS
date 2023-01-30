function lowestPriceInCity(array) {
    let result = {};

    for (let line of array) {
        let [town, product, price] = line.split(' | ');

        price = Number(price);
        if (!result.hasOwnProperty(product)) {
            result[product] = { town, price };
        } else {
            if (result[product].price > price) {
                result[product] = { town, price };
            }
        }
    }

    //console.log(Object.entries(result));
    for (let [productInfo, obj] of Object.entries(result)) {
        console.log(`${productInfo} -> ${obj.price} (${obj.town})`);
    }

}
lowestPriceInCity(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
)