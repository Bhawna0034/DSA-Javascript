// Write a function that add of the elements of an array

function sumOfElementsInArray(arr){
    let sum = 0;
    arr.map((element) => {
        return sum+=element;
    })

    return sum;
}

console.log(sumOfElementsInArray([1, 2, 3, 4, 5]));
console.log(sumOfElementsInArray([5, 5, 5, 5, 5]))