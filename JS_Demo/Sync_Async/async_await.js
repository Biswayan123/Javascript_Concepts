// // 1. async function without await
// async function f1(){
//     console.log("This is an async function without await");
//     return 42; // return a promise that resolves with 42
// }

// f1()
//     .then(result => {
//         console.log(result);
//     });

// // 2. async function without await but with error (reject promise)
// async function f2(){
//     console.log("This is an async function without await but with error");
//     throw new Error("throws error"); // return a promise that rejects with an error
// }

// f2()
//     .catch(error => {
//         console.log(`The error message is ${error}`);
//     });

// 3. async function with resolved/rejected promise
function getInfo(){
    return new Promise((resolve, reject) => {
        const random = Math.random();
        setTimeout(() => {
            if(random > 0.5){
                resolve(random);
            }
            else{
                reject(new Error("Rejected"));
            }
    }, 2000)
})
}

async function getValueInfo(){
    try{
   const result = await getInfo(); 
   console.log("Result = ", result);
    }catch(error){
        console.log("Error = ", error);
    }
}

getValueInfo();