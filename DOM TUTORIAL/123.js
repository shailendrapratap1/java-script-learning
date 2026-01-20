// event objects 
// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click",function(event){
//     console.log(event);
// })
// jab bhi mai kisi bhi element me event listner ko add karunga
// js engine ---> line by line code execution
// browser js engine --- + extra features
// browser --- js engine + webApi

// jab browser ko pata chala ki user ne event perform kiya jo hmm listen kar rahe the 
// browser ----- 2
// 1.) callback function hai vo js engi ko dega ....
// 2); callback functon ke sath vo jo event hua hai uski information bhi dega 
// ye ivfo ek object ke form me milegi ek object ko recieve karenge yahan pe 


// function hello(a){
//     console.log(a);
// }
// hello({firstkey:"value1",secondkey:"value2"})

const allButtons = document.querySelectorAll(".my-buttons button");
 

for(let button of allButtons){
    button.addEventListener("click",(e)=>{
        console.log(e.CurrentTarget);
    })
} 