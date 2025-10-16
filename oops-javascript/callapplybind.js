function about(hobby, favMusician){
        console.log(this.firstName,this.age, hobby,favMusician)
}


const user1 = {
    firstName : "Harshit",
    age:8,

}
const user2 = {
    firstName : "Hart",
    age:81,

}
// apply
// about.call(user1,"guitwar","ghfff");
// about.apply(user1,["guitwar","ghfff"]);
//bind
const func=about.bind(user2,"guitwar","ghfff");
func()




// const user1 = {
//     firstName : "Harshit",
//     age:8,
//     about: function(){
//         console.log(this.firstName, this.age);
//     }
// }
// // user1.about();
// // dont do this mistake
// const myFunc = user1.about.bind(user1);
// myFunc();
