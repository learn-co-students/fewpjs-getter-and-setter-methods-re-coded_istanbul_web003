// Add your Circle class here
const PI = Math.PI

class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return this.radius * 2
  }

  get circumference() {
    return PI * this.radius * 2
  }

  get area() {
    return PI * this.radius ** 2
  }

  set diameter(newDiameter) {
    this.radius = newDiameter / 2
  }
  set circumference(newCircumference) {
    this.radius = newCircumference / (2 * PI)
  }
  set area(newArea) {
    this.radius = Math.sqrt(newArea) / PI
  }
}
