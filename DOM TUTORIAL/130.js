// synchronims programming vs asynchronyms programming
// synchronous programming
// synchronus programming language single threaded

// console.log("script start");
// for(let i=1;i<1000;i++){
//     console.log("inside for loop");
// }

// console.log("script end");

// // setTimeout
// console.log("script start");

// const id =setTimeout(()=>{
//     console.log("inside setTimeout");
// },0);
// for(let i=1;i<100;i++){
//     console.log("....");
// }
// console.log("settimeout id is ",id);
// console.log("clearing time out");
// clearTimeout(id);

// console.log("script end");
// for(let i=0;i<1000;i++){
//     console.log("inside for loop")
// }

console.log("script start")

const id  = setTimeout(()=>{
    console.log("insidde setTimeOut");
},1000)

for(let i=0;i<100;i++){
    console.log("....")
}
console.log("set time out id is",id)
console.log("clearing time out")
clearTimeout(id);
console.log("Script end");