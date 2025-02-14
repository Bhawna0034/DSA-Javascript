// Given a string, reverse each word in the sentence

function reverseEachWord(str){
   let reverseStr =  str.split(" ")
       .map((word) => {
          return word.split("")
                     .reverse()
                     .join("");
       });
    
    return reverseStr;
}
let str = "My name is Bhawna Sharma";
console.log(reverseEachWord(str));