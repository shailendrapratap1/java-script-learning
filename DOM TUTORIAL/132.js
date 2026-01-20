// understanding callbacks
// function myFunc(callback){
// console.log("func is doing some task");
// callback();
// }


// myFunc(()=>{
//     console.log("funcion is doing task2")
// });


function getTwoNumbersAndAdd(number1, number2,onSuccess,onFaliure){
if(typeof number1 === "number" && typeof number2 === "number")
  {   onSuccess(number1,number2);
}
else{
   onFaliure();
}
}
function addTwoNumbers(num1 , num2){
    console.log(num1+num2);
}


function onFail(){
    console.log("wrong data type");
    console.log("please type numbers only")
}
getTwoNumbersAndAdd(4,4,addTwoNumbers, onFail);