class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (this.warehouseSpace - spaceRequired <= 0) {
            throw new Error("Not enough space in the warehouse.")
        }
        this.warehouseSpace = this.warehouseSpace - spaceRequired;
        this.products.push({
            product,
            quantity
        })

        return `The ${product} has been successfully delivered in the warehouse.`
    }

    quantityCheck(product, minimalQuantity) {
        let isMissingProduct = true;
        if (minimalQuantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.")
        }
        for (const object of this.products) {
            if (object.product === product) {
                isMissingProduct = false;
                if (minimalQuantity <= object.quantity) {
                    return `You have enough from product ${product}.`
                }
                let difference = minimalQuantity - object.quantity;
                object.quantity = minimalQuantity;
                return `You added ${difference} more from the ${product} products.`
            }
        }


        if (isMissingProduct) {
            throw new Error(`There is no ${product} in the warehouse.`)
        }
    }

    sellProduct(product) {
        let isMissingProduct = true;
        for (const object of this.products) {
            if (object.product === product) {
                isMissingProduct = false;
                object.quantity = object.quantity - 1;
                this.sales.push({
                    product,
                    quantity: 1
                })

                return `The ${product} has been successfully sold.`
            }
        }

        if (isMissingProduct) {
            throw new Error(`There is no ${product} in the warehouse.`)
        }
    }

    revision(){
        let result = [];
        if (this.sales.length === 0) {
            throw new Error("There are no sales today!")
        }

        result.push(`You sold ${this.sales.length} products today!`);
        result.push("Products in the warehouse:")
        this.products.forEach(object => result.push(`${object.product}-${object.quantity} more left`))

        return result.join('\n')


    }
}


const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());


