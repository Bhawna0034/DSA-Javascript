function checkPrime(inputNum){
    if(inputNum <= 1){
        return `Prime Number of ${inputNum} is not Possible!`;
    }
    else{
        for(let i=2; i<= Math.sqrt(inputNum); i++){
            if(inputNum % i === 0)
                return `${inputNum} is not a Prime Number`;
        }
        return `${inputNum} is a Prime Number`;
    }
}

const prompt = require('prompt-sync')();
let inputNum = parseInt(prompt("Enter a number: "));
console.log(checkPrime(inputNum));