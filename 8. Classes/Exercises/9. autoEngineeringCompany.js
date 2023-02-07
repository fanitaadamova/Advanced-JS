function autoEngineeringCompany(input) {
    let result = {};

    for (const line of input) {
        let [carBrand, carModel, producedCars] = line.split(' | ');
        producedCars = Number(producedCars);

        if (!result.hasOwnProperty(carBrand)) {
            result[carBrand] = {}
        }

            if (result[carBrand][carModel]) {
                result[carBrand][carModel] += Number(producedCars)
            } else {
                result[carBrand][carModel] = Number(producedCars)
            }
    }

    for (carBrand  in result) {
         console.log(`${carBrand}`);
        for (const carModel in result[carBrand]) {
        console.log(`###${carModel} -> ${result[carBrand][carModel]}`);
        }
    }

}
autoEngineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)