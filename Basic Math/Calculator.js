const prompt = require("prompt-sync")();
const num1 = parseFloat(prompt("Enter first number: "));
const operator = prompt("Enter an operator (+, -, *, /): ");
const num2 = parseFloat(prompt("Enter second number: "));
let result;

switch(operator){
    case '+': 
              result = num1 + num2;
              break;
    case '-':
              result = num1 - num2;
              break;
    case '*': 
              result = num1 * num2;
              break;
    case '/':
              if(num2 === 0){
                 console.log("Error: Divisible by zero is not allowed!");
                break;
              }

              result = num1 / num2;
              break;
    default: 
              console.log('Invalid operator!');
               break;

}

if(result != undefined){
    console.log(result);
}