class Car{
    static wheels = 4
    constructor(name, price, model, wheels){
        this.name = name;
        this.price = price;
        this.wheels = wheels;
    }

    static drive(){
        console.log("Car is driving !");
    }

    refuel(){
        console.log(this.name + " is refueled !");
    }
}

const c1 = new Car("BMW", 5000000, "X5", 50) // c1 is the reference to the 'new Car' object
console.log(c1.name + " " + c1.price + " " + c1.wheels);
c1.refuel();
Car.drive(); // static methods or variables in a class can only be accessed using the class name 
                // and not the object reference
console.log(Car.wheels);