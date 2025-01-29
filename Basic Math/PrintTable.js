const prompt = require('prompt-sync')();
const inputNum = parseInt(prompt("Enter a number: "));
for(let i=1; i<=10; i++){
    let result = inputNum * i;
    console.log(`${inputNum} x ${i} = ${result}`);
}