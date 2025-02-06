// Program to join all elements of the following Array into String

function convertArrayToString(myArray){
    const strArray = myArray.join(', ');
    return strArray;
}

console.log(convertArrayToString(["Red", "Green", "White", "Black"]));