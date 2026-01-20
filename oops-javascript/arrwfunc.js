<<<<<<< HEAD
// arrow func
const user1 = {
    firstName : "Harshit",
    age:8,
    about: () => {
        console.log(this)
        console.log(this.firstName, this.age);
    }
}
=======
// arrow func
const user1 = {
    firstName : "Harshit",
    age:8,
    about: () => {
        console.log(this)
        console.log(this.firstName, this.age);
    }
}
>>>>>>> 8a6acb7ff4a0b985b34034b62376c8f834900c05
user1.about(user1);