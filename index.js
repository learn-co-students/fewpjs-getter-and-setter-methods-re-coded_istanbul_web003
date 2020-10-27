// Add your Circle class here

class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }

    get area() {
        return this.radius * this.radius * Math.PI
    }

    set diameter(diameter) {
        return this.radius = diameter / 2
    }

    get circumference() {
        return this.radius * 2 * Math.PI
    }

    set circumference(circumference) {
        return this.radius = circumference / (Math.PI * 2)
    }

    set area(area) {
        return this.radius =  area / Math.PI
    }
}

