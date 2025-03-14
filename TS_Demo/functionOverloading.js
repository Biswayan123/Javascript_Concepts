// Function Overloading is possible in TypeScript but not in JavaScript
function add(a, b) {
    return a + b;
}
var s1 = add(10, 20);
var s2 = add("Hello", "TypeScript");
var s3 = add(true, false);
console.log(s1 + "\n" + s2 + "\n" + s3);
