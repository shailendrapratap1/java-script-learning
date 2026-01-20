<<<<<<< HEAD
// const userMethods ={
//      about: function(){
//         return `${this.firstName} is ${this.age} years`
//     },
//    is18:function(){
// return this.age >=18;
    
//     },
//     sing: function(){
//         return 'toon sdnnhgaa rgag';
//     }
// }

function createUser(firstName, lastName,email,age,address){
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address=address;
    // user.about =userMethods.about;
    //     user.is18 =userMethods.is18;
    // user.sing = userMethods.sing;
    return user;

}
createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years`
};
createUser.prototype.is18 = function(){
return this.age >=18;
};
createUser.prototype.sing = function(){
    return 'toon sdnnhgaa rgag';
}

const user1 = createUser('harshit','vasisth','rahul@gmail.com','34','my address')
const user2= createUser('hahit','vasisth','rahul@gmail.com','34','my address')
const user3= createUser('rshit','vasisth','rahul@gmail.com','74','my address')
console.log(user1);
console.log(user1.is18());


=======
// const userMethods ={
//      about: function(){
//         return `${this.firstName} is ${this.age} years`
//     },
//    is18:function(){
// return this.age >=18;
    
//     },
//     sing: function(){
//         return 'toon sdnnhgaa rgag';
//     }
// }

function createUser(firstName, lastName,email,age,address){
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address=address;
    // user.about =userMethods.about;
    //     user.is18 =userMethods.is18;
    // user.sing = userMethods.sing;
    return user;

}
createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years`
};
createUser.prototype.is18 = function(){
return this.age >=18;
};
createUser.prototype.sing = function(){
    return 'toon sdnnhgaa rgag';
}

const user1 = createUser('harshit','vasisth','rahul@gmail.com','34','my address')
const user2= createUser('hahit','vasisth','rahul@gmail.com','34','my address')
const user3= createUser('rshit','vasisth','rahul@gmail.com','74','my address')
console.log(user1);
console.log(user1.is18());


>>>>>>> 8a6acb7ff4a0b985b34034b62376c8f834900c05
