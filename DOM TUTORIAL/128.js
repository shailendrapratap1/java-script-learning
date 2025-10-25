console.log("hello world");
const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");


// capturing event 
// child.addEventListener("click",()=>{
//     console.log("capture !!!!! child")
// },true);
// parent.addEventListener("click",()=>{
//   console.log("capture !!!!! parent")
// },true);

// grandparent.addEventListener("click",()=>{
//     console.log("capture !!!!! grandparent")
// },true);
// document.body.addEventListener("click",()=>{
//     console.log("capture !!!!! document.body")
// },true);

// not capturing
// child.addEventListener("click",()=>{
//     console.log("you clicked on child")
// });
// parent.addEventListener("click",()=>{
//     console.log("bubble parent")
// });

// grandparent.addEventListener("click",()=>{
//     console.log("bubble grandparent")
// });
// document.body.addEventListener("click",()=>{
//     console.log("bubble document.body")
// });



// event delegation 
grandparent.addEventListener("click",(e) =>{
    console.log(e.target);
});