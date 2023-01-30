function storeCatalogue(array) {

    let result = {};
    for (const line of array) {
        let [product, price] = line.split(' : ')
        price = Number(price);
        let firstLetter = product[0];

        if (!result.hasOwnProperty(firstLetter)) {
            result[firstLetter] = {}
        }
        result[firstLetter][product] = price

    }
    //sorting by key
    let entriesResult = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]))


    for (const line of entriesResult) {
        console.log(`${line[0]}`)
         //sorting  - така сортирам вътрешния обект, който в случая е втори индех от масива 
        let newEntryArray = Object.entries(line[1]).sort((a, b) => a[0].localeCompare(b[0]))

        for (const array of newEntryArray) {
            const productName = array[0];
            const productPrice = array[1];
            console.log(`  ${productName}: ${productPrice}`);
        }

    }


}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)