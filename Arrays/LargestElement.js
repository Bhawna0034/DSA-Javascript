function findLargestElement(arr){
    let largestElement = arr[0];
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > largestElement){
            largestElement = arr[i];
        }
    }
    return largestElement;
}
const arr = [1, 2, 4, 7, 7, 5];
const largestElement = findLargestElement(arr);
console.log(`Largest element: ${largestElement}`);
