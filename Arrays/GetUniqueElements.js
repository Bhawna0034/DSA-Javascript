//Get unique elements from the given array
const  arr = [1, 2, 3, 6, 8, 9, 1,3, 4, 2, 5];

let mySet = new Set(arr);
console.log(mySet);

let UniqueArr = [...mySet];
console.log(arr);
