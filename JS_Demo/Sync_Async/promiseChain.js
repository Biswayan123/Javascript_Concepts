
function getEvenNumber(value, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(value % 2 === 0){
                resolve(value);
            }
            else{
                reject(new Error(value + " is not an even number"));
            }
        },delay);
    });
}

getEvenNumber(12, 1000)
    .then(data => {
        console.log("First data" , data);
        return getEvenNumber(13, 2000);
    })
    .then(data => {
        console.log("Second data" , data);
    })
    .catch(error => {
        console.log(error);
    });