// Function to get the first element of an array. Passing a parameter 'n' will return the function 'n' element of the array


function getter(input, get = 1){
    let cloned = [];
    for(let i=0; i<get; i++){
        cloned.push(input[i]);
    }
    return cloned;
}

console.log(getter([1, 2, 3, 4]));
console.log(getter([1, 3, 5, 6, 3, 8,9], 4));
console.log(getter([1, 5, 2, 5], -2));