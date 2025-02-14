// Write a function to check whether a string is palindrome or not

function palindromeString(str){
    let reversedStr = str.split("")
                         .reverse()
                         .join("");
    return reversedStr === str;
}

console.log(palindromeString("madam"));
console.log(palindromeString("loop"));