// nested if else 

// winning number 19;
// 19 your guess is wright
// 17too low
// 20 to high 

let winningNumber =19;
let userGuess = +prompt("Guess a number");
// "12"
if(userGuess === winningNumber){
    console.log("your guess is right!!");
}else{
    if(userGuess < winningNumber){
        console.log("too low !!!");
    }else{
        console.log("too high !!!");
    }
}