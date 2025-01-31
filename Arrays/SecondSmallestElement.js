function findSecondSmallestElement(arr){
    let smallestElement = arr[0];
    let secondSmallest = Number.MAX_VALUE;
    for(let i=1; i<arr.length; i++){
        if(arr[i] < smallestElement){
            secondSmallest = smallestElement;
            smallestElement = arr[i];
        }
        else if((arr[i] != smallestElement) && (arr[i] < secondSmallest)){
            secondSmallest = arr[i];
        }
    }
    return secondSmallest;
}

const arr = [1, 5, 6, 4, -1, -8];
const secondSmallest = findSecondSmallestElement(arr);
console.log(`Second smallest element: ${secondSmallest}`);