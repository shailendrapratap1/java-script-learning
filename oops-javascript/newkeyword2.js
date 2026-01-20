<<<<<<< HEAD
// new keyword
// 1 . empty object 
// this ={}
// return= {}

// --proto-- 
// official ecmascript documentation
function CreateUser(firstName, lastName,email,age,address){
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address=address;
    // user.about =userMethods.about;
    //     user.is18 =userMethods.is18;
    // user.sing = userMethods.sing;

}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years`
};
CreateUser.prototype.is18 = function(){
return this.age >=18};
CreateUser.prototype.sing = function(){
    return 'toon sdnnhgaa rgag';
}

const user1 =new  CreateUser('harshit','vasisth','rahul@gmail.com','34','my address')
const user2= new CreateUser('hahit','vasisth','rahul@gmail.com','34','my address')
const user3=new  CreateUser('rshit','vasisth','rahul@gmail.com','74','my address')
console.log(user1);
console.log(user1.is18());


=======
// new keyword
// 1 . empty object 
// this ={}
// return= {}

// --proto-- 
// official ecmascript documentation
function CreateUser(firstName, lastName,email,age,address){
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address=address;
    // user.about =userMethods.about;
    //     user.is18 =userMethods.is18;
    // user.sing = userMethods.sing;

}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years`
};
CreateUser.prototype.is18 = function(){
return this.age >=18};
CreateUser.prototype.sing = function(){
    return 'toon sdnnhgaa rgag';
}

const user1 =new  CreateUser('harshit','vasisth','rahul@gmail.com','34','my address')
const user2= new CreateUser('hahit','vasisth','rahul@gmail.com','34','my address')
const user3=new  CreateUser('rshit','vasisth','rahul@gmail.com','74','my address')
console.log(user1);
console.log(user1.is18());


>>>>>>> 8a6acb7ff4a0b985b34034b62376c8f834900c05
