// // nested if else 

// // winning number 19;
// // 19 your guess is wright
// // 17too low
// // 20 to high 

// let winningNumber =19;
// let userGuess = +prompt("Guess a number");
// // "12"
// if(userGuess === winningNumber){
//     console.log("your guess is right!!");
// }else{
//     if(userGuess < winningNumber){
//         console.log("too low !!!");
//     }else{
//         console.log("too high !!!");
//     }
// }




// convert number to  strin
 let myStr = +"34"
 console.log(typeof myStr)
 let age = "17"
 age = Number(age)
 console.log(typeof age)

 let String1 = "hgjghdj"
 let String2 = "hfdjf"

 let newString = +String1 + +String2;
 console.log(typeof newString)
 console.log(newString)


 let myVariable = null;
console.log(myVariable);
myVariable = "harshit";
console.log(myVariable, typeof myVariable);
console.log(typeof null);

let myNumber = BigInt(12);
let sameMyNumber = 123n;
console.log(myNumber);
console.log(Number.MAX_SAFE_INTEGER);
console.log(myNumber+ sameMyNumber);