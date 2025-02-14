// Write a function to check if a number is integer or not

function checkInteger(input){
    let message;
    if(input % 1 === 0)
        message = "Integer";
    else
        message = "Not Integer!";
    return message;
}


const prompt = require("prompt-sync")();
const input = parseFloat(prompt("Enter a number: "));
console.log(checkInteger(input));