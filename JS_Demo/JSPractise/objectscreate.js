1. // Object Literals: {}
const user = {
    name: 'John',
    age: 30,
    country : 'India',
    occupation : 'Software Engineer',
};
console.log(user.occupation);

2. // Constructor functions
function car(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
}

let c1 = new car("BMW", "X5", 2021);
console.log(c1.brand + " " + c1.model + " " + c1.year);

3. // Class Style
class Customer{
    constructor(name, age, country){
        this.name = name;
        this.age = age;
        this.country = country;
    }

    getDetails(){
        return `${this.name} is ${this.age} years old and is from ${this.country}`;
    }
}
let cust1 = new Customer("John", 30, "USA");
console.log(cust1.getDetails());
console.log(cust1.name + " is " + cust1.age + " years old");

// 4. Object.create()
const empInfo = {
    printInfo: function(){
        console.log(`Employee Name is ${this.name} and Emp ID is ${this.id}`);
    }
};

const emp1 = Object.create(empInfo);
emp1.name = "Tom";
emp1.id = "D543Q";
emp1.printInfo();

5. // using Factory Function -> return an object
function createDept(deptName, deptNumber){
    return{
        Dept_Name: deptName,
        Dept_Number: deptNumber,
        getDeptInfo(){
            return `This is ${this.Dept_Name} department and the code is ${this.Dept_Number}`;
        }
    }
};

const dept1 = createDept("HR", 101);
const dept2 = createDept("Finance", 102);
console.log(dept1.getDeptInfo());
console.log(dept2.getDeptInfo());
console.log(dept1.Dept_Name);
