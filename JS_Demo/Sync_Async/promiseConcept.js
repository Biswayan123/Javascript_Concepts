
const num = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve(randomNumber);
        } else {
            reject(new Error(randomNumber + " is a small value"));
        }
    }, 2000);
});

num
    .then(data => {
        console.log("Success: ", data);
    })
    .catch(error => {
        console.log("Error: ", error);
    });