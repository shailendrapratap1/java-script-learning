// arrow func
const user1 = {
    firstName : "Harshit",
    age:8,
    about: () => {
        console.log(this)
        console.log(this.firstName, this.age);
    }
}
user1.about(user1);