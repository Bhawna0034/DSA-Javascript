//Sort an Array 0 1 2 (Dutch National Flag Algorithm)
function sort012(arr){
    let low = 0;
    let mid = 0;
    let high = arr.length-1;

    while(mid <= high){
        if(arr[mid] === 0){
            [arr[mid], arr[low]] = [arr[low], arr[mid]]
            low++;
            mid++;
        }
        else if(arr[mid] === 1){
            mid++;
        }
        else{
            [arr[mid], arr[high]] = [arr[high], arr[mid]]
            high--;
        }
    }
    return arr;
}

let arr = [0, 1, 2, 0, 1, 2];
console.log('Original Array: ', arr);

//Sorted Array
console.log('Sorted Array: ', sort012(arr));
