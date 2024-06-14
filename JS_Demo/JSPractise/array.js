let lang = ["Java", "Python", "JavaScript", "C", "C++"];

// 1.
lang.push("Ruby");  // add to the end
console.log(lang);

// 2.
lang.pop(); // remove from the end
console.log(lang);

// 3.
lang.shift(); // remove from the beginning
console.log(lang);

// 4.
lang.unshift("Kotlin", "Java"); // add to the beginning
console.log(lang);

// 5.
lang.splice(1, 2, 'Ruby', 'Pascal'); // remove 2 elements starting from index 1 and add Ruby and Pascal
console.log(lang);

// 6.
let num = [1,2,3,4,5,6,7,8]
let newNum = num.slice(1, 3); // return a new array with elements from index 1 to 3
console.log(newNum);

// 7.
let fruit = ["Apple", "Banana", "Mango", "Orange"];
let mergedArray = fruit.concat(num); // merge two arrays
console.log(mergedArray);

// 8.
let index = fruit.indexOf("Mango"); // find the index of an element
let newfruit = ["Apple", "Banana", "Mango", "Orange", "Banana"];
let secondIndex = newfruit.indexOf("Banana", 2)
console.log(index);
console.log(fruit.indexOf("Pineapple"));
console.log(secondIndex)

// 9.
let flag = fruit.includes("Mango", 3);
console.log(flag);

// 10.
num.forEach((i) => {
    console.log(i+1);
})