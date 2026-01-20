// how to get the dimensions of an element
// height width

const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect().height;
console.log(info);
