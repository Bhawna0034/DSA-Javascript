// Write a function to check whether the input is array or not

function checkArray(input){
   return input instanceof Array;
}

console.log(checkArray([1, 3, 4]));
console.log(checkArray(1));
console.log(checkArray("Bhawna"));