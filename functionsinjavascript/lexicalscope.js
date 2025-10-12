// lexical scope
function myApp(){
    const myVar = "value1";


    function myFunc(){
        // const myVar ="value59";
        const myFunc2 = ()=>{
     console.log("inside my func", myVar);

        }
        myFunc2();
}
   
    console.log(myVar);
    myFunc();
}
myApp();