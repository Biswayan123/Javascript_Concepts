const fs = require('fs');
const data = fs.readFileSync("note.txt", "utf-8");  //readFileSync is an sync function

console.log(data);
console.log("Bye");