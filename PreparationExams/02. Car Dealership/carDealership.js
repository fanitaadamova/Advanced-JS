class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (model === "" || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error("Invalid input!")
        }
        this.availableCars.push({ model, horsepower, price, mileage })
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }

    sellCar(model, desiredMileage) {
        let resultObject = this.availableCars.find((object) => object.model === model)

        if (resultObject == undefined) {
            throw new Error(`${model} was not found!`)
        }

        if (resultObject.mileage - desiredMileage > 0 && resultObject.mileage - desiredMileage <= 40000) {
            resultObject.price = resultObject.price * 0.95
        } else if (resultObject.mileage - desiredMileage > 40000) {
            resultObject.price = resultObject.price * 0.90
        }
        //remove resultObject
        this.availableCars = this.availableCars.filter((object) => object.model !== model);
        resultObject.price = resultObject.price.toFixed(2)
        this.soldCars.push({
            model: model,
            horsepower: resultObject.horsepower,
            soldPrice: Number(resultObject.price)
        })

        this.totalIncome += Number(resultObject.price)

        return `${model} was sold for ${resultObject.price}$`

    }

    currentCar() {
        if (this.availableCars.length == 0) {
            return "There are no available cars"
        }

        let result = [];
        result.push(`-Available cars:`)
        this.availableCars.forEach(object => result.push(`---${object.model} - ${object.horsepower} HP - ${object.mileage.toFixed(2)} km - ${object.price.toFixed(2)}$`))

        return result.join('\n')
    }

    salesReport(criteria) {

        if (criteria !== 'horsepower' && criteria !== 'model') {
            throw new Error("Invalid criteria!")
        }

        let result = [];
        result.push(`-${this.name} has a total income of ${Number(this.totalIncome).toFixed(2)}$`);
        result.push(`-${this.soldCars.length} cars sold:`);

        if (criteria === 'horsepower') {
            this.soldCars
                .sort((a, b) => b.horsepower - a.horsepower)
                .forEach(object => result.push(`---${object.model} - ${object.horsepower} HP - ${Number(object.soldPrice).toFixed(2)}$`))
        }

        if (criteria === 'model') {
            this.soldCars
            .sort((a,b) => a.model.localeCompare(b.model))
            .forEach(object => result.push(`---${object.model} - ${object.horsepower} HP - ${Number(object.soldPrice).toFixed(2)}$`))
        }

        return result.join('\n')
    }


}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
console.log(dealership.currentCar());



