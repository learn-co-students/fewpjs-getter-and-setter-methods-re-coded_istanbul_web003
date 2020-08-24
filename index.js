class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }
    get circumference() {
        return Math.PI * this.diameter;
    }
    get area() {
        return Math.PI * this.radius * this.radius;
    }
    set diameter(newDiameter) {
        this.radius = newDiameter / 2;
    }
    set circumference(circ) {
        this.radius = circ / (2 * Math.PI);
    }
    set area(newArea) {
        this.radius = newArea(Math.PI * this.radius);
    }
}
