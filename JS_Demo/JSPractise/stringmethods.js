const string = "JavaScript"
console.log(string.length)

console.log(string.slice(2,-5)) // in slice method -ve values means from end of the string

// J a v a S c r i p t
// 0 1 2 3 4 5 6 7 8 9
// -10 -9 -8 -7 -6 -5 -4 -3 -2 -1

console.log(string.substring(-2,5)) // in substring method -ve values are treated as 0
console.log(string.substring(2,-5))

console.log("Dev Test Framework".replace("Dev", "Automation"));
const date = "01-01-2024";
console.log(date.replaceAll("-","/"));