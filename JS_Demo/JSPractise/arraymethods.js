// 1. MAP
let fahTemp = [32,68,86,104,212];
let celTemp = fahTemp.map((i) => (i-32)*(5/9));
console.log(celTemp)

// 2. FILTER
let num = [1,2,3,4,5,6,7,8,9];
let evenNum = num.filter((i) => i % 2 === 0);
console.log(evenNum)

let employee = [
    {name : "John" , age : 25, gender : "male"},
    {name : "Meena" , age : 30, gender : "female"},
    {name : "Amit" , age : 47, gender : "male"},
    {name : "Sheela" , age : 40, gender : "female"},
    {name : "Bala" , age : 32, gender : "male"},
];

let femaleEmp = employee.filter((emp) => {
    return emp.gender == "female" && emp.age > 30
})
console.log(femaleEmp);

// 3. REDUCE
let arr = [1,2,3,4,5];
let product = arr.reduce((prod,i) => prod*i, 1);
console.log(product);

let numarr = [30,10,100,25,780,54,2]
let maxNum = numarr.reduce((max,i)=>{
    if(i>max){
        return i;
    }
    else{
        return max;
    }
}, numarr[0]);
console.log(maxNum)