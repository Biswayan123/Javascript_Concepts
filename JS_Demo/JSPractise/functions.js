function add(a,b){
    return a+b;
}
console.log(add(2,3));

const div = (t1,t2) => t1/t2;
const ans = div(10,2);
console.log(ans);

// FUNCTION CONSTRUCTOR
let multiply = new Function('a','b','return a*b');
console.log(multiply(3,4));

// IIFE (Immediately Invoked Function Expression)
(function(){
    console.log("Hello World !");
})();

// GENERATOR FUNCTION - function* and yield keywords are used
function* generateNumbers(){
    yield 1;
    yield 2;
    yield 3;
}
const value = generateNumbers();
console.log(value.next().value); // 1
console.log(value.next().value); // 2

// ANONYMOUS FUNCTION
const num = [1,2,3,4,1000000];
let square = num.map(function(i){
    return i*i;
});
console.log(square);


// HIGHER ORDER FUNCTION
function add(a,b){
    return a+b;
}
function calculate(funcName,a,b){
    return funcName(a,b);
}
let sum = calculate(add,10,20);
console.log(sum);

const person = {
    firstName : "Biswayan",
    lastName : "Chattopadhyay",
};
const fullName = person => `${person.firstName} ${person.lastName}`;

console.log(fullName(person));


// rest parame(ters
let total = (...num) => num.reduce((sum,i) => sum+i, 0);
let x = total(1,2,3,4,5,6,7,8,9,10);
console.log(x);
