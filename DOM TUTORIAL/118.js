// static list vs live list

// querySelectorAll hamen static list dega
// getElementsBySomething hamein live list dega
const ul = document.querySelector(".todo-list");
const listItems = ul.getElementsByTagName("li");

const sixthLi = document.createElement("li");
sixthLi.textContent ="item6";
// const ul = document.querySelector(".todo-list");
ul.append(sixthLi);
console.log(listItems);