// CASE 1. All functions are getting resolved

const f1 = () =>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("1st function");
        }, 2000);
    })
}

const f2 = () =>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("2nd function");
        }, 2000);
    })
}

const f3 = () =>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("3rd function");
        }, 2000);
    })
}

Promise.all([f1(),f2(),f3()])
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })

// CASE 2. One function is getting rejected - Promise.all will go to 'then' handler 
//only if all the functions are resolved. If any one function is rejected, it will go to 'catch' handler
const g1 = () =>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Passed");
        }, 2000);
    })
}

const g2 = () =>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject("Error : No data available");
        }, 2000);
    })
}

Promise.all([g1(),g2()])
    .then(dataArray => {
        console.log("All data fetched : ", dataArray);
    })
    .catch(error => {
        console.log(error);
    })
