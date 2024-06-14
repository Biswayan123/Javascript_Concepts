//1 . Find unique number in array
const array = [1,2,3,2,3,2,5,6,3,2,1]
const unique = [...new Set(array)];
console.log(unique);

// 2. Int to String
const num = 49;
const numStr = num + '';
// const numStr = Sring(num);
console.log(numStr+10);

// 3. check if variable is a number
const value = 't'
if(typeof value === 'number' && !isNaN(value)){
    console.log(value + ' is a number');
}
else{
    console.log(value + ' is not a number');
}

// 4. Swap two variables
let a = 5;
let b = 10;
[a,b] = [b,a];
console.log("a = " + a + "," + "b = " +b);

// 5. Remove falsy values from array : (false , 0, "", null, undefined, NaN)
const arr = [1,0, NaN, "", 2,3,4,5,6,7,8,9,0, false, '', null, undefined, NaN];
const newArr = arr.filter(Boolean);
console.log(newArr);

// 6. Check if array contains a value
const lang = ['java', 'python', 'javascript', 'c++'];
const valueToCheck = 'pascal';
if(lang.includes(valueToCheck)){
    console.log(valueToCheck + ' is present');
}
else{
    console.log(valueToCheck+ ' is not present');
}

// 7. Generate random number
const min = 10;
const max = 50;
const random = Math.floor(Math.random() * (max - min + 1) + min);
console.log(random);

// 8. Join array elements into a string
const words = ['I', 'love', 'coding'];
const sentence = words.join(' ');
console.log(sentence);

// 9. convert object to array
const person = {
    name: 'John',
    age: 25,
    gender: 'Male',
}

const keyArray = Object.keys(person);
const valueArray = Object.values(person);
const user = Object.entries(person);

console.log(user);
console.log(keyArray);
console.log(valueArray);

// 10. get current daye and time
const today = new Date();
console.log(today.toLocaleString());

// 11. Last item in array
const x = [0,1,3,4,5,9];
const lastItem = x.slice(-1);
console.log(lastItem);