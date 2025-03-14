// tuple is always fixed length and fixed type, order is important
// array is dynamic and more values can be added in runtime
var person = ['John', 30];
var emp = ['John', 30, true];
// can be declared in form of array
var users = [['John', 30, true], ['Smith', 40, false]];
console.log(users[0]);
console.log(users[1][0]);
var customer = ['John', 30];
customer.push('Smith', 40);
console.log(customer);
