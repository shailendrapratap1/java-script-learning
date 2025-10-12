// arrow functions
// const singHappyBirthday = function(){
//     console.log("happy birhtday to you ......");
// }

const singHappyBirthday = () =>{
    console.log("happy birhtday to you ......");
}
singHappyBirthday();




const sumThreeNumbers= (number1,number2,number3) =>{
    return number1 + number2+number3;
}
const ans = sumThreeNumbers(3,4,5);
console.log(ans);


const isEven = number=> number % 2 === 0;

console.log(isEven(5));




const firstChar=anyString=> anyString[0];


console.log(firstChar("harshit"));
const findTarget=(array, target) =>{
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
// const myArray = [1,3,8,90]
// const ans =findTarget(myArray,1);
// console.log(ans);