// Add your Circle class here

// Creating a class of Circle
// Circle will accept 1 parameter, radius, and use this.radius to store the value
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Define getter methods for diameter, circumference, and area which will calculate 
  //each value using this.radius and pi
  get diameter() {
    return this.radius * 2;
  }

  get circumference() {
    return Math.PI * this.radius * 2;
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }

  // Define setter methods for diameter, circumference, and area which will accept 
  //values for each calculation, calculate the radius based on the input value and set this.radius accordingly
  set diameter(newDiameter) {
    this.radius = newDiameter / 2;
  }
  set circumference(newCircumference) {
    this.radius = newCircumference / (2 * Math.PI);
  }
  set area(newArea) {
    this.radius = Math.sqrt(newArea) / Math.PI;
  }
}



