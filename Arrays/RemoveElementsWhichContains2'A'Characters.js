// Remove elements from given array which contains 2 or more than 2 "A" character
const arr = ["harsh", "bhawna", "hemant", "anil", "anita", "jatin"];
const ans = arr.filter((val) => {
    if(val.split("a").length <=2)
        return true;
})

console.log(ans);