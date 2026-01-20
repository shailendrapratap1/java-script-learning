// this keyword 
const btn = document.querySelector(".btn-headline");
 btn.addEventListener("click",()=>{
    console.log("you clicked me");
    console.log("value of this");
    console.log(this);
});


// normal vs arrow different results will occur 
// arrow always will one step ahead

