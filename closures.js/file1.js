<<<<<<< HEAD
// closures 
// closure : 30-40
// analyse : 70-80%
// real example : 100%

// functions can return functions
// function hello(x){
// const a = "varA";
// const b = "varB";
// return function(){
//     console.log(a,b,x);
// }

// }
// const ans = hello("arg");
// ans();



function myFunction(power){
    return function(number){
       return number ** power;
    }
}

const cube = myFunction(3);
const ans = cube(3);
=======
// closures 
// closure : 30-40
// analyse : 70-80%
// real example : 100%

// functions can return functions
// function hello(x){
// const a = "varA";
// const b = "varB";
// return function(){
//     console.log(a,b,x);
// }

// }
// const ans = hello("arg");
// ans();



function myFunction(power){
    return function(number){
       return number ** power;
    }
}

const cube = myFunction(3);
const ans = cube(3);
>>>>>>> 8a6acb7ff4a0b985b34034b62376c8f834900c05
console.log(ans);