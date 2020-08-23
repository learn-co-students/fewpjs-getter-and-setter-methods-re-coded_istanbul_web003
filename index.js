// Add your Circle class here

class Circle{
    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        return this.radius*2;
    }

    get area(){
        return (this.radius**2)*Math.PI;
    }

    get circumference(){
        return this.radius*Math.PI*2;
    }

    set diameter(diameter){
        this.radius = diameter/2;
    }

    set area(area){
        this.radius = Math.sqrt(area/Math.PI);
    }

    set circumference(cir){
        this.radius = cir/(2*Math.PI)
    }
}