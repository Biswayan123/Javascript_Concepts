let totBill: any = 123;
let bill = <number>totBill;

console.log(bill+456);

let mesg: any = "Hello TS";
let len = (mesg as string).length;
console.log(len);

let flag: any = false;
if(flag as boolean){
    console.log("Flag is True");
}
else{
    console.log("Flag is False");
}
