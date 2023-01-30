function heroicInventory(array) {
    let result = [];

    for (const line of array) {
        let [heroName, heroLevel, heroItems] = line.split(' / ')
        const heroes = {
            name: heroName,
            level: Number(heroLevel),
            items: heroItems ? heroItems.split(', ') : []
        };

        result.push(heroes)
    }

    return JSON.stringify(result)

}
console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
))

console.log(heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']))