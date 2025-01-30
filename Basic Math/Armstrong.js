function checkArmstrong(inputNum){
    let rem, sum =0;
    let temp = inputNum;
    if(inputNum <=0){
        return 0;
    }
    else{
        
        while(inputNum !== 0){
            rem = inputNum % 10;
            sum+= rem**3;
            inputNum = Math.floor(inputNum/10);
        }
    }
    return temp == sum? `Yes, it is Armstrong Number`: `No, it is not a Armstrong Number`;
}
const prompt = require("prompt-sync")();
const inputNum = parseInt(prompt("Enter a number: "));
console.log(checkArmstrong(inputNum));