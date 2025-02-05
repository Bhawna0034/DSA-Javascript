// Function to clone an array

function array_Clone(arr){
    let cloneArray = [...arr];
    return cloneArray;
}

console.log(array_Clone([1, 2, 3, 4]));
console.log(array_Clone([1, 2, [4, 5]]));
console.log(array_Clone([1, 2, 3,[4]]));