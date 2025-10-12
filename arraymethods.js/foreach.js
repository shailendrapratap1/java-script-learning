// important array methods 

const numbers =[4,3,5,6];
// function myFunc(number, index){
//     console.log(`index is${index} number is ${number}`);
//     // console.log(`${number}*2 = ${number*2}`);

// }
// numbers.forEach(function(number,index){
//     console.log( number*2,index);
// });

const users = [
    {firstName:"harshit", age:23 },
        {firstName:"arst", age:73 },
            {firstName:"hat", age:93 },
    {firstName:"hash", age:28 },
   
]

// users.forEach(function(user){
// console.log(user.firstName);
// });
users.forEach((user,index)=>{
    console.log(user.firstName);
});
// for(let user of users){
//     console.log(user.firstName);
// }

