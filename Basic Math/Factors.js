function findFactors(inputNum){
    if(inputNum <= 0){
        console.log(`Factors of ${inputNum} is not possible`);
    }
    for(let i=1; i<=inputNum; i++){
            if(inputNum % i == 0){
                console.log(`${i}`);
            }
    }
    
}

const prompt = require('prompt-sync')();
let inputNum = parseInt(prompt("Enter a number: "));
console.log(`Factors of ${inputNum}`);
findFactors(inputNum);
