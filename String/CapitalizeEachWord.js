// Function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

function capitalizeEachWord(str) {
  let allWords = str.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.substring(1);
  });
  return allWords.join(" ");
}

console.log(capitalizeEachWord("my name is bhawna sharma"));
