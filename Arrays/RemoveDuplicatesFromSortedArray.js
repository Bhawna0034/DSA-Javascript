//Using Set (Brute Force  )
function removeDuplicatesFromArray(arr){
    let myset = new Set();
    for(let i=0; i<arr.length; i++){
        myset.add(arr[i]);
    }
    arr = [...myset];
    return arr;
}
const arr = [1, 1, 2, 2, 2, 3, 3];
console.log(removeDuplicatesFromArray(arr));