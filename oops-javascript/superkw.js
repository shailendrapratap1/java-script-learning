<<<<<<< HEAD
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
=======
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
>>>>>>> 8a6acb7ff4a0b985b34034b62376c8f834900c05
console.log(tomm.eat());