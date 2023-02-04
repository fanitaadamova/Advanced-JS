//The static keyword defines a static method for a class
//Static methods are part of the class and not of its instances


class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const x = b.x - a.x;
        const y = b.y - a.y;
        const dist = Math.sqrt(x ** 2 + y ** 2);
        return dist
    }

}

const p1 = new Point(5, 5);
let p2 = new Point(9, 8);

console.log(Point.distance(p1, p2))