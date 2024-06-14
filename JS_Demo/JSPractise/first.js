function reverseNumber(number) {
    const reversed = parseFloat(number.toString().split('').reverse().join(''));
    console.log(Math.sign(number) * reversed);
}

reverseNumber(631)

let names =  ["John", "Doe", "Smith"];
console.log(names[0]);