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

Promise.allSettled([g1(),g2()])
    .then(results => {
        results.forEach(result => {
            if(result.status === 'fulfilled'){
                console.log("Data fetched : ", result.value);
            }
            else{
                console.log(result.reason);
            }
        })
    })
    .catch(error => {
        console.log(error);
    })
