// Add your Circle class here
class Circle {
    constructor(radius) {
    this.radius = radius;
    }

   get diameter() {
       return `${this.radius}` * 2;
   }

   get circumference() {
       return `${this.radius}` * 2  * Math.PI
   }

   get area() {
    return `${this.radius}` * `${this.radius}` * Math.PI
   }

   set diameter(nDiameter) {
       this.radius = nDiameter/2;
   }

   set circumference(nCircumference) {
    this.radius = nCircumference/(2*Math.PI);
}
    set area(nArea) {
        this.radius=Math.sqrt(nArea/Math.PI);
    }
}
