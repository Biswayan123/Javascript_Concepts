// Function Overloading is possible in TypeScript but not in JavaScript

// Steps :
// 1) Provide the function definition
// 2) Provide the function implementation, but only once
// 3) function name should be same, diferent data types of parameters and return type and number of parameters
// should be different

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a:boolean, b:boolean): boolean;

function add(a: any, b: any): any {
    return a + b;
}

let s1 = add(10, 20);
let s2 = add("Hello", "TypeScript");
let s3 = add(true, false);

console.log(s1 + "\n" + s2 + "\n" + s3);