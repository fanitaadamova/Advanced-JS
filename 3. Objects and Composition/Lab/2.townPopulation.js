function townPopulation(array) {

    let object = {};
    for (const line of array) {
        let [town, population] = line.split(' <-> ')

        if (!object.hasOwnProperty(town)) {
            object[town] = 0;
        }
        object[town] += Number(population)

    }

    /*
    for (const town in object) {
            console.log(`${town} : ${object[town]}`);
        }
    */

    for (const [town, population] of Object.entries(object)) {
        console.log(`${town} : ${population}`);
    }

}
townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
)

townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'])