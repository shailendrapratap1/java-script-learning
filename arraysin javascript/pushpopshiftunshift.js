let fruits = ["apple","mango","grapes","Banana"];
console.log(fruits);
fruits.push("banana");
console.log(fruits)
//pop

let poppedFruit = fruits.pop();
console.log(fruits);
console.log("popped fruits is", poppedFruit);

// unshift 
fruits.unshift("banana");
fruits.unshift("myFruit");
console.log(fruits)

// shift 
let removedFruit = fruits.shift();
console.log(fruits);
console.log("removed fruit is", removedFruit);

