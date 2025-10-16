// methods
//function inside object 
function personInfo(){
  console.log(`person name is  ${this.firstName} and person age is ${this.age}`);
    }

const person1 ={
    firstName : "mohit",
    age:8,
    about: personInfo
}
const person2 ={
    firstName : "mo",
    age:81,
    about: personInfo
}
const person3={
    firstName : "mohnbv ",
    age:18,
    about: personInfo
}

person1.about();
person2.about();
person3.about();



