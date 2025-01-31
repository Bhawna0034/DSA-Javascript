function findSecondLargestElement(arr){
    let largestElement = arr[0];
    let secondLargestElement = Number.MIN_VALUE;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > largestElement){
            secondLargestElement = largestElement;
            largestElement = arr[i];
        }
        else if(arr[i] > secondLargestElement && arr[i] < largestElement){
            secondLargestElement = arr[i];
        }
        
    }
    return secondLargestElement;
}
const arr = [1, 2, 4, 7, 7, 5];
const secondLargestElement = findSecondLargestElement(arr);
console.log(`Second largest element: ${secondLargestElement}`);