// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius=radius;
    }

    get diameter(){
        return this.radius*2
    }

    get area(){
        return this.radius*this.radius*Math.PI
    }
    
    get circumference(){
        return this.diameter*Math.PI
    }

    set diameter(newDiameter){
        this.radius=newDiameter/2;
    }

    set circumference(newCircumference){
        this.radius=(newCircumference/Math.PI)/2
    }
}  