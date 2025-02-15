// Write a function which remove all objects which don't have gender's value male

function removeObject(arr){
    // Count all non-male objects
    let count = 0;
    arr.forEach((element) => {
       if(element.gender !== 'male')
        count++;
    })

    // Remove all non-male objects
    for(let i = 0; i <= count; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j]. gender !== 'male')
                arr.splice(j, 1);
        }
    }
    return arr;


}

let arrObject = [
    {name: "Bhawna", gender: "female"},
    {name: "Hemant", gender: "male"},
    {name: "Sanya", gender: "female"},
    {name: "Sarthak", gender: "male"},
    {name: "Arjun", gender: "male"},
    {name: "abc", gender: "other"}
];
console.log(removeObject(arrObject));