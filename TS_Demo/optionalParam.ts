// to define optional parameter in function, use ? after parameter name

function personInfo(name:string, age?:number):string{
    return "Name: "+name+", Age: "+age;
}

console.log(personInfo("John"));