// map method
const numbers =[3,4,6,1,8];
// const square =function(number){
//     return number * number;
// }

// const squareNumber=numbers.map((number,index)=>{
//     return  `index${index}, ${number * number}`;
// });
// console.log(squareNumber);

const users = [
    {firstName:"harshit", age:23 },
        {firstName:"arst", age:73 },
            {firstName:"hat", age:93 },
    {firstName:"hash", age:28 },
   
]
const userNames = users.map((user)=>{
    return user.firstName;
});
console.log(userNames);