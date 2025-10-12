// // funstion expression
// // function singHappyBirthday(){
// //     console.log("happy birthday to you ....")
// // }
// const singHappyBirthday = function(){
//     console.log("happy birhtday to you ......");
// }
// singHappyBirthday();
// const sumThreeNumbers= function(number1,number2,number3){
//     return number1 + number2+number3;
// }
// const ans= sumThreeNumbers(2,3,4);
// console.log(ans);



// const returnedValue = sumThreeNumbers(2,4,3);
// console.log(returnedValue);


// odd or even 
// input :1 numbet
// output:true,false

// function isEven(number){
    
//   return number % 2 === 0;
// }


const isEven = function(number){
    return number % 2 === 0;
}


// function 
// input: string
// output : firstcharacter

const firstChar=function(anyString){
    return anyString[0];
}
console.log(firstChar("zbc"))



// function 
// input  : array,twarget(number)
// output : index of target if target is present in array

function findTarget(array, target){
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