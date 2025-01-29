function checkPalindrome(inputNum){
    let reverse = 0;
    let rem;

    let original = inputNum;
    while(inputNum !== 0){
        rem = inputNum % 10;
        reverse = reverse * 10 + rem;
        inputNum = Math.floor(inputNum / 10);
       
    }

    return original == reverse
     ? `Yes, ${original} is a Palindrome Number`
     : `No, ${original} is not a Palindrome Number`;
}

const prompt = require("prompt-sync")();
let inputNum = parseInt(prompt("Enter a number: "));
console.log(checkPalindrome(inputNum));