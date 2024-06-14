const resolvePromise = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Passed");
        }, 200);
    })
}

const rejectPromise = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject("Rejected");
        }, 500);
    })
}

// Promise.race return the first settled promise
Promise.race([resolvePromise(),rejectPromise()])
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    })