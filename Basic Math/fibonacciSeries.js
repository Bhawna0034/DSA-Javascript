//Fibonacci Series
function fib(inputNum){
    if(inputNum < 0){
        return `Please enter positive number`;
    }

    let fib = [0, 1 ];
    for(let i= 2; i<=inputNum; i++){
        fib[i] = fib[i-2] + fib[i-1];
       
    }
    return `${fib.join(', ')}`;
   
    
}
const prompt = require("prompt-sync")();
const inputNum = parseInt(prompt("Enter a number: "));
console.log(fib(inputNum));
// console.log(Fibonacci);
