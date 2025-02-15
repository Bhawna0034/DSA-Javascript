// Write a Function that returns a passed string with letters in alphabetical order

function stringAlphabeticalOrder(str){
    return str.split("").sort().join("");
}

console.log(stringAlphabeticalOrder("apple"));
console.log(stringAlphabeticalOrder("Bhawna"));