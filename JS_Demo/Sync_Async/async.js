const fs = r//readFile is an async functionequire('fs');
const data = fs.readFile("note.txt", "utf-8", (error,data)  => {  
    if(error) {
        console.log(error);
    }
    console.log(data);
});

console.log("Bye");