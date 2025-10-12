// find method

// const myArray =["Hello","caat","dog","lion"];

// function isLength3(string){
//     return string.length === 3;
// }

// const ans = myArray.find((string)=>string.length===3);
// console.log(ans);


const users = [
    {userId : 1,userName:"hitesh"},
      {userId : 2,userName:"tink"},
    {userId : 3,userName:"htdsa"},
    {userId : 4,userName:"hit"},
    {userId : 5,userName:"har"},
  ];
  const myUser=users.find((user)=> user.userId===3);
  console.log(myUser)

