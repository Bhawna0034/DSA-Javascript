// Function which accepts an argument and return the type


function inputType(input){
    return typeof input;
}

console.log(inputType([]));
console.log(inputType(12));
console.log(inputType("Bhawna"));
console.log(inputType(true));
console.log(inputType(function () {}));
// console.log(inputType(inputType));
console.log(inputType(undefined));
