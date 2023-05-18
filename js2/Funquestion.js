//guess the number

let random  = Math.floor(Math.random() *10)+ 1;
// generate random number
let number = parseInt(prompt("guess the number"));
//keep asking for number until correct number is guessed
// increamenrt the chances variable until\
while(number != random){
    number = parseInt(prompt("guess the number"));
}
if (number == random){
    console.log("you have guessed the correct number")
}

//eventually after game is finished , display the number of chances
