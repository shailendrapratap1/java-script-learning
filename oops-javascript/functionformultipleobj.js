<<<<<<< HEAD

//function (that func craete object)
// 2 add key value pair
// 3 object ko return karna hoga
function createUser(firstName, lastName,email,age,address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address=address;
     user.about= function(){
        return `${this.firstName} is ${this.age} years`
    },
   user.is18=function(){
return this.age >=18;
    
    }
    return user;

}
const user1 = createUser('harshit','vasisth','rahul@gmail.com','34','my address')
console.log(user1);
const is18 = user1.is18();
const about = user1.about();
console.log(is18);
console.log(about);
=======

//function (that func craete object)
// 2 add key value pair
// 3 object ko return karna hoga
function createUser(firstName, lastName,email,age,address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address=address;
     user.about= function(){
        return `${this.firstName} is ${this.age} years`
    },
   user.is18=function(){
return this.age >=18;
    
    }
    return user;

}
const user1 = createUser('harshit','vasisth','rahul@gmail.com','34','my address')
console.log(user1);
const is18 = user1.is18();
const about = user1.about();
console.log(is18);
console.log(about);
>>>>>>> 8a6acb7ff4a0b985b34034b62376c8f834900c05
