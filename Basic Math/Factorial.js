const prompt = require("prompt-sync")();
let inputSum = parseInt(prompt("Enter number: "));
let factorial = fact(inputSum);
console.log(`Factorial of ${inputSum} is ${factorial}`);



function fact(inputSum){
    if(inputSum ===0 || inputSum === 1){
        return 1;
    }
    else{
        return inputSum * fact(inputSum-1);
    }
}