// Add your Circle class here

class Circle {
    constructor(radius){
        this.radius = radius;
        this._pi = Math.PI;
    };

    get diameter () {
        return this.radius * 2;
    }
    
    get circumference() {
        return this.diameter * this._pi
    }

    get area(){
        return this._pi * Math.pow(this.radius, 2);
    }

    set diameter (newDiameter){
        this.radius =  newDiameter/2
    }

    set circumference (circumference){
        this.diameter = circumference / this._pi;
    }


}