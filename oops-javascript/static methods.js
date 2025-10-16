// static methods and properties
class Animal {
    constructor(name,age){
        this.name = name;
        this.age=age;
    }
    static classInfo(){
        return 'this is animal class'
    }
    static desc = "static property"
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
const animal1 = new Animal("tom",3);
animal1.eat();
const ans = Animal.classInfo();
console.log(ans)
console.log(Animal.desc)