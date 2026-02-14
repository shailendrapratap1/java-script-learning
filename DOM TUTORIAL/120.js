// inteo to events 
// click 
// 1.)
const btn = document.querySelector(".btn-headline");
// method --> add event listner 
function clickMe(){
    console.log("you clicked me ")
}
btn.addEventListener("click",function(){
    console.log("you clicked me");
});


btn.addEventListener("click",()=>{
    console.log("you clicked me");
});
// const btn = document.querySelector(".btn-headiline")
// function clickMe(){
//     console.log("you clicked me")
// }
// btn.addEventListener("click",function(){
//     console.log("you clicked me")
// })




