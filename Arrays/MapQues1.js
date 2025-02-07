// Create an array with a given array if length of the word is equal to 5 characters then add inside <p> tag and if length is not then add inside <span> tag.

const array = ["hello", "a", "apple", "guava", "harsh", "nishi"];

const newArray = array.map((val) => {
    if(val.length === 5)
        return `<p> ${val}</p>`;
    else
        return `<span>${val}</span>`
})

console.log(newArray);