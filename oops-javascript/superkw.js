// // super
// class Animal {
//     constructor(name,age){
//         this.name = name;
//         this.age=age;
//     }
//     eat(){
//         return `${this.name} is eating`;
//        }
//        isSuperCute(){
//         return this.age <= 1;
//        }
//        isCute(){
//         return true;
//        }
// }


// // object / instance

// class Dog extends Animal{
//    constructor(name,age,speed){
//     super(name,age);
//     this.speed = speed;
//    }
//    run(){
//     return `${this.name} is running at ${this.speed}kmph`
//    }
// }
// const tomm = new Dog("tomm",3,45);
// console.log(tomm.run());





// same method in base class 
class Animal {
    constructor(name,age){
        this.name = name;
        this.age=age;
    }
    eat(){
        return `${this.name} is eating`;
       }
       isSuperCute(){
        return this.age <= 1;
       }
       isCute(){
        return true;
       }
}

// object / instance

class Dog extends Animal{
   constructor(name,age,speed){
    super(name,age);
    this.speed = speed;
   }
     eat(){
        return `Modified Eat : ${this.name} is eating`;
       }
   run(){
    return `${this.name} is running at ${this.speed}kmph`
   }
}
const tomm = new Dog("tomm",3,45);
console.log(tomm.run());
console.log(tomm.eat());