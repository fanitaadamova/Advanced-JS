function juiceFlavors(input) {

    let juice = {}

    for (const line of input) {
        let [typeOfJuice, quantity] = line.split(' => ')
        quantity = Number(quantity);

        if (!juice.hasOwnProperty(typeOfJuice)) {
            juice[typeOfJuice] = { bottles: 0, quantity: 0 }
        }

        juice[typeOfJuice].quantity += quantity;

        if (juice[typeOfJuice].quantity >= 1000) {
            while (juice[typeOfJuice].quantity >= 1000) {               
                juice[typeOfJuice].bottles += 1;
                juice[typeOfJuice].quantity -= 1000;

                if (juice[typeOfJuice].bottles === 1) {
                    let currentQuantity = juice[typeOfJuice].quantity
                    delete juice[typeOfJuice];
                    juice[typeOfJuice] =  { bottles: 1, quantity: currentQuantity }                  
                }
            }
        }

    }

    for (const typeOfJuice in juice) {
        if (juice[typeOfJuice].bottles > 0) {
            console.log(`${typeOfJuice} => ${juice[typeOfJuice].bottles}`);
        }
    }


}

juiceFlavors(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
)
console.log(`-------------`);
juiceFlavors(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549'])