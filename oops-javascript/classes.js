// 2015 /es6
// class are fake
class CreateUser{
    constructor(firstName, lastName,email,age,address){
        console.log("constructor called")
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address=address;
    }
    about(){  return `${this.firstName} is ${this.age} years`}
    is18(){return this.age >=18};
   sing(){ return 'toon sdnnhgaa rgag'

   }
   func(a){
    console.log(a);
   }
}

const user1 =new  CreateUser('harshit','vasisth','rahul@gmail.com','34','my address')
const user2= new CreateUser('hahit','vasisth','rahul@gmail.com','34','my address')
const user3=new  CreateUser('rshit','vasisth','rahul@gmail.com','74','my address')
// console.log(Object.getPrototypeOf(user1));
user1.func("harshit");



