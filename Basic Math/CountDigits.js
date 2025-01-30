function countDigits(inputNum){
    let rem, count = 0;
    while(inputNum > 0){
        rem = inputNum % 10;
        count++;
        inputNum = Math.floor(inputNum / 10);
    }
    return count;
}

const prompt = require("prompt-sync")();
const inputNum = parseInt(prompt("Enter a number: "));
console.log(countDigits(inputNum));