// A class can have many objects but only one constructor. Constructor overloading and method overloading is not
// allowed in JavaScript.

class Car{

    constructor(name, price, model, colour){
        this.name = name;
        this.price = price;
        this.model = model;
        this.colour = colour;
    }

    refuel(){
        console.log(this.name + " is refueled !");
    }
}
const c1 = new Car("BMW", 5000000, "X5", "Black") // c1 is the reference to the 'new Car' object
console.log(c1.name + " " + c1.price + " " + c1.model + " " + c1.colour);
c1.refuel();

const c2 = new Car("Audi", 6000000, "Q7", "White")
console.log(c2.name + " " + c2.price + " " + c2.model + " " + c2.colour);
c2.refuel();