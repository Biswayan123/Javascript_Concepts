// Enum - Enumeration: data type that holds set of named constants

// enum Browser{
//     Chrome=4,
//     Firefox,
//     Safari=8,
//     Edge
// }
// console.log(Browser.Chrome);
// console.log(Browser.Edge);
// console.log(Browser);

enum Browser{
    Firefox,
    Safari,
    Edge,
    Chrome=getVersion('Chrome'),  
} // non initialized values shoule be written first

function getVersion(browserName:string):number{
    if(browserName == 'Chrome'){
        return 121;
    }
    else{
        return -1;
    }
}

console.log(Browser);

// console.log(getVersion('Chrome'));

// heterogenous enum
enum Status{
    Active = 'Active',
    Inactive = 1,
    Pending
}

console.log(Status.Active);
console.log(Status['Pending']);