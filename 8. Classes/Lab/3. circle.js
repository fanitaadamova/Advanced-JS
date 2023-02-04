class Circle {

    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(value) {
        this.radius = value / 2;
    }

    get area() {
        return Math.pow(this.radius, 2) * Math.PI;
    }
}

const myCyrcle = new Circle(0.8)

console.log(`Radius: ${myCyrcle.radius}`);
console.log(`Diameter: ${myCyrcle.diameter}`);
console.log(`Area: ${myCyrcle.area}`);

myCyrcle.radius = 5
console.log(`Radius: ${myCyrcle.radius}`);
console.log(`Diameter: ${myCyrcle.diameter}`);
console.log(`Area: ${myCyrcle.area}`);

myCyrcle.diameter = 1.6
console.log(`Radius: ${myCyrcle.radius}`);
console.log(`Diameter: ${myCyrcle.diameter}`);
console.log(`Area: ${myCyrcle.area}`);