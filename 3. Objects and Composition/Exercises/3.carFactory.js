function carFactory(obj) {

    const engines = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 }
    }

    let car = {};

    car.model = obj.model

    if (obj.power <= 90) {
        car.engine = engines.small
    } else if (obj.power <= 120) {
        car.engine = engines.normal
    } else {
        car.engine = engines.monster
    }

    car.carriage = {
        type: obj.carriage,
        color: obj.color
    }

    let wheels = obj.wheelsize;
    if (wheels % 2 === 0) {
        wheels--;
    }
    car.wheels = Array(4).fill(wheels);


    return car

}
console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
))

console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}))

