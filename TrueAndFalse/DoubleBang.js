//Double Bang(!!) operator

console.log(!!0) // false
console.log(!!1)
console.log(!!null)
console.log(!!undefined)
console.log(!!NaN)
console.log(!!"") 

var username="Senthilkumar";
console.log(!!username)

const prompt = require('prompt-sync')();

userinput = prompt("Please enter your 4-digit PIN: ");

if(!!userinput)
{
    console.log("Thank for you input")
}
else{

    console.log("Please enter the value")
}