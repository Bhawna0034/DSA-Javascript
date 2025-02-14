// Write a function that reverse a number
function reverseNumber(num){
    let rem, reverse = 0;
    while(num > 0){
        rem = num % 10;
        reverse = reverse * 10 + rem;
        num = Math.floor(num / 10);
    }

    return reverse;
}
const prompt = require("prompt-sync")();
const  input = parseInt(prompt("Enter a number: "));
console.log(reverseNumber(input));