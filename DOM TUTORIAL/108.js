 // loop
 
/// get multiple elements using getelements by class Name 
// get multiple elements items using query selectorAll

// array like object > ---indexing length property
let navItems = document.getElementsByTagName("a"); // html collection
// console.log(navItems);
// we can not each for each method to ierate htmloclllection
// simple for loop
// for of loop
// forEach


// for(let i=0;i<navItems.length;i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor ="#fff";
//     navItem.style.color = "green";
//         navItem.style.fontWeight = "bold";
// }
// for(let i=0;i<navItems.length;i++){
//     console.log(navItems[i])
//     const navItem = navItems[i];

//     navItem.style.color = 'red'
// }





// for(let navItem of navItems){
//      navItem.style.backgroundColor ="#fff";
//     navItem.style.color = "green";
//         navItem.style.fontWeight = "bold";

// }


navItems = Array.from(navItems);
// // console.log(Array.isArray(navItems))
navItems.forEach((navItem)=>{
 navItem.style.backgroundColor ="#fff";
    navItem.style.color = "blue";
        navItem.style.fontWeight = "bold";


})
    

    

// console.log(Array.isArray(navItems));
// const  navItems = document.querySelectorAll(".nav-item");  // Nodelist
// console.log(navItems[0]);

// let navItems = document.querySelectorAll("a");
// navItems = Array.from(navItems);
// console.log(navItems);