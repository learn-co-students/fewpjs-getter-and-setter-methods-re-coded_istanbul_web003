// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius;

    }
    get diameter(){
        return 2 * this.radius
    }
    set diameter(newDiameter){
        this.radius = newDiameter / 2
    }
    get circumference(){
        return  Math.PI * this.diameter
    }
    set circumference(newCircumference){
        this.radius = newCircumference / (2 * Math.PI)
    }
    get area(){
        return Math.PI * (this.radius ** 2)
    }
    set area(newArea){
        this.radius = Math.sqrt(area / Math.PI)
    }


}