/* заради условието в judge, че приема само една функция, задачата се описва така, но в реална среда
 може да извадим функциите извън обекта, а в Обекта само да ги композираме. По този начин няма да се
  създават на ново ф-иите за всеки град, а само ще се копира адреса(референцията)
*/


function collectTaxes() {
    this.treasury += this.taxRate * this.population
}
function applyGrowth(percentage) {
    this.population += Math.floor(this.population * percentage / 100);
}
function applyRecession(percentage) {
    this.treasury -= Math.ceil(this.treasury * percentage / 100);
}

function cityTaxes(name, population, treasury) {

    const result = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes,
        applyGrowth,
        applyRecession
    }

    return result
}


const city = cityTaxes('Tortuga', 7000, 15000);


city.collectTaxes()
console.log(city.treasury);

city.applyGrowth(5);
console.log(city.population);