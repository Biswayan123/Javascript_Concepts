class Automobile{
    constructor(chasisNumber){
        this.chasisNumber = chasisNumber;
    }
    getChasisNumber(){
        return "This is grandparent class";
    }
}


// parent (super class)
class Vehicle extends Automobile{
    constructor(name, price, model){
        super("X1S34L");
        this.name = name;
        this.price = price;
        this.model = model;
    }

    getInfo(){
        console.log(`${this.name} has a price of ${this.price} and model number - ${this.model}`);
    }

    startEngine(){
        return (`${this.name} has started the engine`);
    }
    stopEngine(){
        return (`${this.name} has stopped the engine`);
    }
}

// child (sub class)
class Car extends Vehicle{
    constructor(name, price, model, colour){
        super(name,price,model);
        this.colour = colour;
    }

    driverCar(){
        return `Driving ${this.name} model ${this.model}`;
    }
}

// child (sub class)
class Truck extends Vehicle{
    constructor(name, price, model, loadingCapacity){
        super(name,price,model);
        this.loadingCapacity = loadingCapacity;
    }

    driverTruck(){
        return (`Driving ${this.name} model ${this.model} with loading capacity of ${this.loadingCapacity}`);
    }
}

const car = new Car("BMW", 5000000, "X5", "Black");
const truck = new Truck("Tata", 1000000, "407", "2 ton");

console.log(car.startEngine());
car.getInfo();

console.log(car.getChasisNumber());

console.log(truck.stopEngine());
truck.getInfo();
console.log(truck.driverTruck());