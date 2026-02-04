// // // nested if else 

// // // winning number 19;
// // // 19 your guess is wright
// // // 17too low
// // // 20 to high 

// // let winningNumber =19;
// // let userGuess = +prompt("Guess a number");
// // // "12"
// // if(userGuess === winningNumber){
// //     console.log("your guess is right!!");
// // }else{
// //     if(userGuess < winningNumber){
// //         console.log("too low !!!");
// //     }else{
// //         console.log("too high !!!");
// //     }
// // }




// // convert number to  strin
//  let myStr = +"34"
//  console.log(typeof myStr)
//  let age = "17"
//  age = Number(age)
//  console.log(typeof age)

//  let String1 = "hgjghdj"
//  let String2 = "hfdjf"

//  let newString = +String1 + +String2;
//  console.log(typeof newString)
//  console.log(newString)


//  let myVariable = null;
// console.log(myVariable);
// myVariable = "harshit";
// console.log(myVariable, typeof myVariable);
// console.log(typeof null);

// let myNumber = BigInt(12);
// let sameMyNumber = 123n;
// console.log(myNumber);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(myNumber+ sameMyNumber);


// if(age>=5){
//     drink='cofeee'
// }else{
//     drink='tea'
// }
// console.log(drink)

// let age = 5;
// let drink = age >=  5 ? 'cofee':'tea';
// console.log(drink)


// let firstName ='arshit'
// let age = 16

// if(firstName[0] === 'H' || age>18){
//     console.log('your name satrs eith h')
// }
//     else{
//     console.log('your name does not starts with h ')
//     }

// let winningNumber = 19;
// let userGuess = +prompt();

// if(userGuess === winningNumber){
//     console.log("your guess is right ")
// }else{
//     if(userGuess < winningNumber){
//         console.log('too low')
//     }
//     else{
//         console.log('too high')
//     }
// }


// let day = 2;
// switch(day){
//     case 0:
//         console.log('sunday')
//         break;
//         case 1:
//       console.log('monday')
//       case 2:
//         console.log('tuesdau')
        
//       break;
//       default: console.log('invalid day')
// }
 
// for(let i=0;i<=50;i++){
//     if(i===6){
// continue;
// }
//         console.log(i)
// }
// let mixed = [1,2,2.3, "string", null, undefined];
// console.log(mixed);
// console.log(Array.isArray(mixed))

// let fruits  = [ "apple","mango","banana","jkgdjkg"]
// console.log(fruits.push('klgdkgld'),(fruits))
// let fruit2 = ["vxkvkz","fkfhkf","fsksfhk"]
// console.log(fruit2.unshift("sjfksjfs"),(fruit2))

// let fruit = ["kdlkg","gjdjk","kgdllgk","kdfk"]
// console.log(fruit.pop(fruit))

//  const fruits3 = ["apple","banana","papaya","fruit"]
//  const fruits0= []
//  for(let index in fruits3){
//     fruits0.push(fruits3[index].toUpperCase())
//  }
//  console.log(fruits0)

// const myArray =["value1","value2","value3"]
// let[myvar1,myvar2,...mynewArray] = myArray;
// console.log("value of myvar1",myvar1);
// console.log("value of myvar2",myvar2);
// console.log(myArray)

// const person = {
//     name:"rahul",
//     age:33,
//     hobbies:'gdkjgkdj'

// }
// console.log(person.name)
// person["person"] = "male"
// console.log(person)



// const person={
//     name:"harshit",
//     age:22,
//     "person hobbies":["guitar","sleeping","listening musioc"]
// }
// for(let key in person){
//     // console.log(`${key}`);
//     console.log(key," : ",person[key]);
   
// }
// const animal ={
//     name:"giraffe",
//     age:'6767',
//     "speciality":["long height","weighted","hve long reach"]
// }
// for(let key in animal){
//     console.log(key, "  : ",animal[key]);
// }
// console.log(typeof (Object.keys(animal)))
// console.log(Array.isArray(Object.keys(animal)));




// const band = {
//     bandName:"led zepplin",
//     famousSong:"stairway to heaven",
//     year:1968,
//     anotherFamousSong:"kashmir"
// }

// let {bandName,famousSong,...restProps} =band;
// console.log(bandName);
// console.log(restProps)

// function singhHappyBirthDay(){
//     console.log("happy birthday to you ....");
// }

// function sumThreeNumbers(number1,number2,number3){
//     return number1 + number2 + number3;
// }
// function findTarget(array,target){
//     for(let i=0;i<array.length;i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }
// const myArray = [13,8,90,6]
// const ans = findTarget(myArray,4)
// console.log(ans)


// c
// console.log(ans)onst sumThreeNumbers = function(number1,number2,number3){
//     return number1+number2+number3;
// }
// const ans = sumThreeNumbers(2,3,4);
const multiplyTNumbers = function(number1,number2,number3){
    return number1*number2*number3;
}
const ans = multiplyTNumbers(4,5,6);
console.log(ans)