<<<<<<< HEAD
// new keyword
function createUser(firstName, age){
    this.firstName = firstName;
    this.age = age;
}
createUser.prototype.about = function(){
    console.log(this.firstName,this.age);
}
const user1 = new createUser("harshit",6);

// new keyword
// 1).empty object this={}
// 2) return this
// Object.create(createUser.prototype);

=======
// new keyword
function createUser(firstName, age){
    this.firstName = firstName;
    this.age = age;
}
createUser.prototype.about = function(){
    console.log(this.firstName,this.age);
}
const user1 = new createUser("harshit",6);

// new keyword
// 1).empty object this={}
// 2) return this
// Object.create(createUser.prototype);

>>>>>>> 8a6acb7ff4a0b985b34034b62376c8f834900c05
user1.about();