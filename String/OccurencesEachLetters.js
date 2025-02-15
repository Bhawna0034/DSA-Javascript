// Function to get the no. of occurences of each letter in specified string

function calculateOccurence(str){
    let occurences = {};
    str.split("").forEach((element) => {
        if(occurences.hasOwnProperty(element) === false)
            occurences[element] = 1;
        else
            occurences[element]++;
    });

    return occurences;
}

console.log(calculateOccurence("apple"));
console.log(calculateOccurence("bhawna"));