// getters and setters
class person{
    constructor(firstName, lastName,age){
        this.firstName = firstName;
        this.lastName =lastName;
        this.age = age;
    }
   get fullName(){
        return`${this.firstName} ${this.lastName}`
    }
   set fullName(fullName){
    // fullname.split(" ");
    const[firstName,lastName] =fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;


   }
}

const person1 = new person("harshit","sharma",5);
// console.log(person1.fullName());
// console.log(person1.fullName);
person1.fullName = "mohit vashisth";
console.log(person1);
