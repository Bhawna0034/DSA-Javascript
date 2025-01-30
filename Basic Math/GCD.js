function GCD(num1, num2){
    for(let i = min(num1, num2); i >= 1; i--){
        if((num1 % i == 0) && (num2 % i == 0)){
            return i;
            break;
        }
        
    }
}
function min(num1, num2){
    if(num1 < num2){
        return num1;
    }
    else{
        return num2;
    }
}

const prompt = require("prompt-sync")();
const num1 = parseInt(prompt("Enter first number: "));
const num2 = parseInt(prompt("Enter second number: "));
console.log(GCD(num1, num2));