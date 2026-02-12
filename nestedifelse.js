// // // nested if else 

// // // winning number 19;
// // // 19 your guess is wright
// // // 17too low
// // // 20 to high 

// // let winningNumber =19;
// // let userGuess = +prompt("Guess a number");
// // // "12"
// // if(userGuess === winningNumber){
// //     console.log("your guess is right!!");
// // }else{
// //     if(userGuess < winningNumber){
// //         console.log("too low !!!");
// //     }else{
// //         console.log("too high !!!");
// //     }
// // }




// // convert number to  strin
//  let myStr = +"34"
//  console.log(typeof myStr)
//  let age = "17"
//  age = Number(age)
//  console.log(typeof age)

//  let String1 = "hgjghdj"
//  let String2 = "hfdjf"

//  let newString = +String1 + +String2;
//  console.log(typeof newString)
//  console.log(newString)


//  let myVariable = null;
// console.log(myVariable);
// myVariable = "harshit";
// console.log(myVariable, typeof myVariable);
// console.log(typeof null);

// let myNumber = BigInt(12);
// let sameMyNumber = 123n;
// console.log(myNumber);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(myNumber+ sameMyNumber);


// if(age>=5){
//     drink='cofeee'
// }else{
//     drink='tea'
// }
// console.log(drink)

// let age = 5;
// let drink = age >=  5 ? 'cofee':'tea';
// console.log(drink)


// let firstName ='arshit'
// let age = 16

// if(firstName[0] === 'H' || age>18){
//     console.log('your name satrs eith h')
// }
//     else{
//     console.log('your name does not starts with h ')
//     }

// let winningNumber = 19;
// let userGuess = +prompt();

// if(userGuess === winningNumber){
//     console.log("your guess is right ")
// }else{
//     if(userGuess < winningNumber){
//         console.log('too low')
//     }
//     else{
//         console.log('too high')
//     }
// }


// let day = 2;
// switch(day){
//     case 0:
//         console.log('sunday')
//         break;
//         case 1:
//       console.log('monday')
//       case 2:
//         console.log('tuesdau')
        
//       break;
//       default: console.log('invalid day')
// }
 
// for(let i=0;i<=50;i++){
//     if(i===6){
// continue;
// }
//         console.log(i)
// }
// let mixed = [1,2,2.3, "string", null, undefined];
// console.log(mixed);
// console.log(Array.isArray(mixed))

// let fruits  = [ "apple","mango","banana","jkgdjkg"]
// console.log(fruits.push('klgdkgld'),(fruits))
// let fruit2 = ["vxkvkz","fkfhkf","fsksfhk"]
// console.log(fruit2.unshift("sjfksjfs"),(fruit2))

// let fruit = ["kdlkg","gjdjk","kgdllgk","kdfk"]
// console.log(fruit.pop(fruit))

//  const fruits3 = ["apple","banana","papaya","fruit"]
//  const fruits0= []
//  for(let index in fruits3){
//     fruits0.push(fruits3[index].toUpperCase())
//  }
//  console.log(fruits0)

// const myArray =["value1","value2","value3"]
// let[myvar1,myvar2,...mynewArray] = myArray;
// console.log("value of myvar1",myvar1);
// console.log("value of myvar2",myvar2);
// console.log(myArray)

// const person = {
//     name:"rahul",
//     age:33,
//     hobbies:'gdkjgkdj'

// }
// console.log(person.name)
// person["person"] = "male"
// console.log(person)



// const person={
//     name:"harshit",
//     age:22,
//     "person hobbies":["guitar","sleeping","listening musioc"]
// }
// for(let key in person){
//     // console.log(`${key}`);
//     console.log(key," : ",person[key]);
   
// }
// const animal ={
//     name:"giraffe",
//     age:'6767',
//     "speciality":["long height","weighted","hve long reach"]
// }
// for(let key in animal){
//     console.log(key, "  : ",animal[key]);
// }
// console.log(typeof (Object.keys(animal)))
// console.log(Array.isArray(Object.keys(animal)));




// const band = {
//     bandName:"led zepplin",
//     famousSong:"stairway to heaven",
//     year:1968,
//     anotherFamousSong:"kashmir"
// }

// let {bandName,famousSong,...restProps} =band;
// console.log(bandName);
// console.log(restProps)

// function singhHappyBirthDay(){
//     console.log("happy birthday to you ....");
// }

// function sumThreeNumbers(number1,number2,number3){
//     return number1 + number2 + number3;
// }
// function findTarget(array,target){
//     for(let i=0;i<array.length;i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }
// const myArray = [13,8,90,6]
// const ans = findTarget(myArray,4)
// console.log(ans)


// c
// console.log(ans)onst sumThreeNumbers = function(number1,number2,number3){
//     return number1+number2+number3;
// }
// const ans = sumThreeNumbers(2,3,4);
// const multiplyTNumbers = function(number1,number2,number3){
//     return number1*number2*number3;
// }
// const ans = multiplyTNumbers(4,5,6);
// console.log(ans)


// const isEven = function(number){
//     return number % 2 === 0;
// }
// const firstChar = function(anyString){
//     return anyString[0];
// }


// const findTarget = function(array,target){
//     for(let i=0;i<array.length;i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }

// function app(){
//     const myFunc = () => {
//         console.log('hello from myFunc')
//     }
//     const addTwo = (num1,num2)=>{
//         return num1 + num2;
//     }

// const mul = (num1,num2) => num1*num2;
// console.log("inside app")
// myFunc();
// console.log(addTwo(2,3));
// console.log(mul(2,3));
// }
// app();

// const numbers = [3,4,5,6,18];
// const square = function(square){
//     return number * number;
// }


// const squareNumber =  numbers.map((number,index)=>{
//     return index;
// })

// console.log(squareNumber)



// const anials = [
//     {name:"giraffe",age:32},
//     {name:'kangaroo',age:68},
    
// ]
// const anialNames = anials.map((anial)=>{
//     return anial.name
// })
// console.log(anialNames)

// const userCart = [
//     {productId:1,productName:"mobile",price:12000},
//     {productId:2,productName:"telivision",price:34666},
//     {productId:3,productName:"tutu",price:67676}

// ]

// const total = userCart.reduce((totalPrice,CurrentProduct)=>{
//     return totalPrice + CurrentProduct.price;
// },0)
// console.log(total)

// const users = [
//     {userId:1,firstName:'harshit',gender:'male'},
//     {userId:2,firstName:'mohit',gender:'male'}
// ]

// const[{firstName:user1firstName,userId},{gender:user2gender}] = users;
// console.log(user1firstName)
// console.log(userId);
// console.log(user2gender);

// function myApp(){
//     if(true){
//         var firstName = "harshit"
//         console.log(firstName)
//     }
//     if(true){
//         console.log(firstName)
//     }
//     console.log(firstName)
// }
// myApp();


// function AddAllnumbers(...numbers){
// let total = 0;
// for(let number of numbers){
//     total = total + number;
// }
// return total;
// }
// const ans =  AddAllnumbers(4,567,7,54);
// console.log(ans)

//  const person  = {
//     firstName:"harshit",
//     lastName:"vashish"
//  }

//  function all({firstName,lastName}){
// console.log(firstName);
// console.log(lastName);
//  }
//  all(person);

// function myFunc2(name){
//     console.log("inside my func 2")
//     console.log(`your name is ${name}`);
// }

// function myFunc(callback){
//     console.log("heeloo there i am a fuunc")
//     callback("harhsit")
// }
// myFunc(myFunc2)

// const users = [ 
//     {
//         firstn:"hfjfjs",age:34
//     },{firstn:"jkjk",age:54}

// ]

// const usersn = users.map((user)=>{
//     return user.firstn
// })
// console.log(usersn)

// const numbers = [2,34,4,5];

// // const res = numbers.filter((number)=>{
// //     return number%2==0
// // })
// console.log(res)


// const userCart = [{
//     productId:1,productName:"iphone", productCost:6767
// },
// {
//     productId:2,productName:"ghfgfh",productCost:78788
// },
// {
//     productId:3,productName:"hjhjh",productCost:6767

// }

// ]

// const totalAmount =  userCart.reduce((totalPrice,CurrentProduct)=>{
//       return totalPrice + CurrentProduct.productCost
// },670)
 
// console.log(totalAmount)

// const products = [
//     {productId: 1, produceName: "p1",price: 300 },
//     {productId: 2, produceName: "p2",price: 3000 },
//     {productId: 3, produceName: "p3",price: 200 },
//     {productId: 4, produceName: "p4",price: 8000 },
//     {productId: 5, produceName: "p5",price: 500 },
// ]

// const lotoHigh =  products.slice(0).sort((a,b)=>{
//     return a.price - b.price
// })
// console.log(lotoHigh)

// const hightolo =  products.slice(0).sort((a,b)=>{
//     return b.price - a.price
// })
// console.log(hightolo)

// const myArray = ["Hello","catt","dog","lion"];


// const ans =  myArray.find((string)=> string.length===3);
// console.log(ans)


// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "tv", price: 35000},
// ]



// const an = userCart.some((cartItem)=>cartItem<20000)
// console.log(an)

// const person = new Map();

// person.set('firstName',"harshit")
// person.set('height',5.4)
// person.set('age',34)

// for( let [key,value] of person){
//     console.log(key,value)
// }



// const person = {
//     id:1,
//     firstName:"hjhj"
// }
// const perdon2 ={
//     id:2,
//     firstName:"khj"
// }

// const extraInfo = new Map();
// extraInfo.set(person,{age:8,height:7878})

// console.log(person.id)

// const obj = {
//     key1 : "value1",
//     key2:"value2"
// }

// // const obj2 = {'key69':"value69",...obj}
// const obj2 = Object.assign({'key69':"value69"},obj)
// obj.key3 = "value3";

// console.log(obj)
// console.log(obj2)


// const user = {
//     firstName: "harshit",
//     // address:{houseNumber:'1234'}
// }

// console.log(user?.firstName)
// console.log(user?.address?.houseNumber)


// function personInfo(){
//        console.log(`persn name is ${this.firstName} and age is ${this.age}`)
// }

// const person1 = {
//     firstName:"harsui",
//     age:90
// }

// person1.age();

//   function func () {

// function about(hobby, favMuscician){
//     console.log(this.firstName,this.age,this.favMuscician)
// }

// const user1 = {
//     firstName :"harshit",
//     age:8
// }
// const user2 = {
//     firstName:"kll",
//     age:89
// }

// about.apply(user1,["guitar","bach"]);
// const func = about.bind(user2,"guitar","bach")
//   }
// func();


// const user1 = {
//     firstName:"harshit",
//     age:8,
//     about: function(){
//         console.log(this.firstName,this.age)
//     }

// }
// const myFunc = user1.about.bind(user1);
// myFunc()

// function createUser(firstName,lastName,email,age,address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//      user.email = email;
//      user.age= age;
//      user.address=address;
//      user.about = function(){
//         return `${this.firstName} is ${this.age} years old`
//      }
//      user.is18 = function(){
//      return this.age >= 18;
//     }     
//    return user;
// }

// const user1 = createUser('harshit',"vashisth","ghgh@email.com",19,"jkjkjkjkj")
// const is18 = user1.is18();
//  const about = user1.about();
//     console.log(user1)

// console.log(about);



// const userNames = ['harshit','vashisth',"fhgfh","gfshgf"];

// userNames.sort();
// console.log(userNames)


// const user =["rahul","gdgdg","dsd"]
// user.sort()
// console.log(user);

// const numbers =[23,23,221,45]

// numbers.sort((a,b)=>{
// return b-a;
// })
// console.log(numbers)

// const users =[
//    {userId:1,userName:'pulkit',

//    },{
//       userId:2,userName:"yryryry"
//    },{
//       userId:3,userName:"gdfsgh"
//    }
// ]

// users.sort((a,b)=>{
//    if(a.userName > b.userName){
//       return 1;
//    }else{
//       return -1;
//    }
// })
// console.log(users)


// const myArray =["Hello","catt","dog","lion"]

// function isLength3(string){
//    return string.length===3
// }
// const ans = myArray.find((string)=>string.length===3);
// console.log(ans)

// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "tv", price: 35000},
// ]

// const ans = userCart.some((cartItem)=> cartItem.price <= 30000)
// ill(0,3,5)
// console.log(ans)


// const myArray = [1,2,3,4,5,6,7,8,9]

// const deletedItem = myArray.splice(1,2);
// console.log("deleted Item",deletedItem);

// myArray.splice(1,0,6)
// console.log(myArray)



// // MAPS ITERABLE STORES DTA IN KEY VALUE PAIR like objext
// // duplicates keys are not allowed

// const person = new Map();
// person.set('firstName','Harshit');
// person.set('age',7);
// person.set(1,'one')
// person.set([1,2,3],'one teo three')
// console.log(person)

// for(let key of person.keys()){
//    console.log(key,typeof key)
// }
// for(let [key,value] of person){
//    console.log(Array.isArray(key))
//    console.log(key,value)
// }



// const person1 = {
//     id: 1,
//     firstName: "harshit"
// }
// const person2 = {
//     id: 2,
//     firstName: "harshta"
// }
// const extraInfo = new Map();
// extraInfo.set(person1,{age:8,gender:'male'})
// extraInfo.set(person2,{age:90,gender:'fenmale'})
// console.log(extraInfo)

// function about(hobby, favMuscisian){
//     console.log(this.firstName,this.age,favMuscisian,hobby)
// }
// const user1 = {
//     firstName:"harshit",
//     age:8,
// }
// const user2 = {
//     firstName:"mohit",
//     age:9
// }
// about.apply(user1,["guitar","bach"])
// const func = about.bind(user2,"guitar","bach")
// func();

// const user1 = {
//     firstName:"harshit",
//     age:8,
//     about:()=>{
//         console.log(this.firstName,this.age)
//     }
// }

// user1.about();



// function createUser(firstName,lastName,email,age,address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName=lastName;
//     user.email = email;
//     user.age=age;
//     user.address = address;
//     user.about = function(){
//         return`${this.firstName} is ${this.age} years old`;
//     }
//     user.is18 = function(){
//         return this.age>=18
//     }
//    return user
// }
// const user1 = createUser('harshit','vashisth','harshit@gmail.com',19,"my address")

// console.log(user1);
// const is18 = user1.is18();
// const about = user1.about();
// console.log(about)









// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     },
//     sing: function(){
//         return 'toon na na na la la ';
//     }
// }
// function createUser(firstName, lastName, email, age, address){
//     const user = Object.create(createUser.prototype);// {}
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }
// createUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old.`;
// };
// createUser.prototype.is18 = function (){
//     return this.age >= 18; 
// }
// createUser.prototype.sing = function (){
//     return "la la la la ";
// }


// const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
// const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// console.log(user1);
// console.log(user1.is18());



// class Animal{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         return`${this.name} is eating`
//     }
//     isCute(){
//         return true 
//     }
// }
//   class Dog extends Animal{
        
//     }
//     const tommy = new Dog("tommy",3)
// console.log(tommy)
// console.log(tommy.isCute)


// class Animal {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     eat(){
//         return `${this.name} is eating`;
//     }

//     isSuperCute(){
//         return this.age <= 1;
//     }

//     isCute(){
//         return true;
//     }
// }

// class Dog extends Animal{
//     constructor(name, age, speed){
//         super(name,age);
//         this.speed = speed;
//     }

//     run(){
//         return `${this.name} is running at ${this.speed}kmph`
//     }
// } 
// const tommy = new Dog("tommy", 3,45);
// console.log(tommy.run());
// function CreateUser(firstName,lastName,email,age,address){
//     this.firstName = firstName;
//      this.lastName = lastName;
//      this.email = email;
//      this.age = age;
//      this.address = address;
// }
// CreateUser.prototype.about = function(){
//     return `${this.firstName} is${this.age} years old`
// }
// CreateUser.prototype.is18 = function(){
//     return this.age >= 18;
// }
// CreateUser.prototype.bark = function(){
//     return 'bho bho bho'
// }

// const user1 =new CreateUser('harshit','vashisth','harshit@gmail.com','and@gmail.com','myAddress')
// const user2 = new CreateUser('harsh','vashs','hjah@gmail.com',"my Address")
//  const user3 = new CreateUser('rahul','sharma','hjshdj@hdhsj.','19','myyAddress')


// console.log(user1)
// console.log(user1.is18())

class Person{
   constructor(firstName,lastName,age){
    this.firstName=firstName;
    this.lastName = lastName;
    this.age = age;
    
   }
   static classInfo(){
    return 'this is person class'
   }
   static desc = 'static property'
   get fullName(){
    return `${this.firstName} ${this.lastName}`
   }
   set fullName(fullName){
    const [firstName,lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
    
   }
   eat(){
    return `${this.firstName} is eating`
   }
   isSuperCute(){
    return this.age <= 1;
   }
   isCute(){
    return true;
   }
}
const person1 = new Person("harshit", "sharma", 8);

console.log(person1.eat())
  const info = Person.classInfo();

console.log(person1.desc)
console.log(info)






















