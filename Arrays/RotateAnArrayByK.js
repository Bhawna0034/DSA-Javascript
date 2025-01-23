// Rotate an array by K element to Left
 function rotateLeft(arr, k){
    k= k% arr.length; //where k<n
    reverse(arr, 0, k-1 ); //Reverse k elements
    reverse(arr, k, arr.length-1); //Reverse remaining elements
    reverse(arr, 0, arr.length-1); //Reverse entire array
    
    return arr;
 }

 function reverse(arr, start, end){
    while(start<end){
        let temp = arr[start];
        arr[start]=arr[end];
        arr[end]=temp;
        start++;
        end--;
    }

 }


let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
console.log('Original Array: ' + arr);

// After Rotation
let result = rotateLeft(arr, k);
console.log('Rotated Array: ' + result);


