function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
}

// welcome is the callback function
function welcome(){
    console.log('Welcome to Callbacks !');
}

greet("Biswayan", welcome)


// callback with async
function printInfo(name, callback) {
    // async code
    setTimeout(function(){
        console.log('Hello ' + name);
        callback("Wassup ?");
    }, 3000);
}

function display(mesg){
    console.log(mesg);
}

printInfo("Biswayan", display);