class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        //Да го проверя, дали не е само = 0
        if (this.space <= 0) {
            throw new Error("Not enough space in the cellar.")
        }
        this.wines.push({
            wineName,
            wineType,
            price,
            paid: false
        })
        this.space = this.space - 1;

        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }

    payWineBottle(wineName, price) {
        let isMissingWine = true;
        for (const object of this.wines) {
            if (object.wineName === wineName) {
                isMissingWine = false;
                if (object.paid === true) {
                    throw new Error(`${wineName} has already been paid.`)
                }
                object.paid = true;
                //Да проверя дали се сетва тази цена
                this.bill = this.bill + price;
                return `You bought a ${wineName} for a ${price}$.`

            }

        }

        if (isMissingWine) {
            throw new Error(`${wineName} is not in the cellar.`)
        }

    }

    openBottle(wineName) {
        let isMissingWine = true;
        for (const object of this.wines) {
            if (object.wineName === wineName) {
                isMissingWine = false;
                if (object.paid === false) {
                    throw new Error(`${wineName} need to be paid before open the bottle.`)
                }

                this.wines = this.wines.filter(object => object.wineName !== wineName);
                return `You drank a bottle of ${wineName}.`
            }

        }

        if (isMissingWine) {
            throw new Error("The wine, you're looking for, is not found.")
        }

    }

    cellarRevision(wineType) {
        let result = [];

        if (wineType) {
            let foundedWines = this.wines.filter(object => object.wineType === wineType);
            if (foundedWines.length === 0) {
                throw new Error(`There is no ${wineType} in the cellar.`)
            }

            for (const object of foundedWines) {
                result.push(`${object.wineName} > ${wineType} - ${object.paid === true ? 'Has Paid' : 'Not Paid'}.`)
                //object.paid === true ? 'Has Paid' : 'Not Paid'
            }
            return result.join('\n')
        }

        result.push(`You have space for ${this.space} bottles more.`)
        result.push(`You paid ${this.bill}$ for the wine.`)

        this.wines
        .sort((a, b) => a.wineName.localeCompare(b.wineName))
        .forEach(object => result.push(`${object.wineName} > ${object.wineType} - ${object.paid === true ? 'Has Paid' : 'Not Paid'}.`))


        return result.join('\n')

    }

}


const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());





