function checkArrayIsSorted(arr){
   
    for(let i=1; i<arr.length; i++){
        if(arr[i] >= arr[i-1]){
            
        }
        else{
            return false;
        }
    }
    return true;
}

const arr = [1, 2, 1, 3, 4];
// const arr = [1, 2, 2, 3, 3, 4];
console.log(checkArrayIsSorted(arr));