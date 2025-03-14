let names: string[] =  ["John", "Doe", "Smith"];
console.log(names[1]);

let empName: Array<string> =  ['John', 'Doe', 'Smith'];
let empInfo: Array<any> = [123, 'Biswayan', undefined, null];
console.log(empName);
console.log(empInfo[3]);

let id: number = 23;
console.log(id);

// multi type arrays
let multiType: (string | number)[] = [23, 'John', 'Biswayan', 30];

let employee: Array<string> = ["Biswayan", "Naveen", "Ravi", "Chetak"];

for(let i=0;i<employee.length;i++){
    console.log(employee[i]);
}