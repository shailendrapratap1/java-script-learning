// sort 
// 3,5,46,4,22222,445 
// const userNames = ['harshit','mohit','abcd','absbdm','ABDBD']
// userNames.sort();
// console.log(userNames);

const numbers =[3,5,46,4,22222,445];
numbers.sort((a,b)=>{
   return a-b;
});
// numbers.sort((a,b)=>a-b);
console.log(numbers);
// 445,46
// a-b-->  399
// a-b ----> positive (grerater than 0) --->b,a
//a-b-----> negative
// 5,9 ---> -4
// price high too low
const products=[
    {productId:1, productName:"p1",price: 300},
        {productId:2, productName:"p2",price: 3400},
    {productId:3, productName:"p3",price: 5500},
    {productId:4, productName:"p4",price: 32200},
    {productId:5, productName:"p5",price: 3020},

]
// lowtohigh
const lowToHigh=products.slice(0).sort((a,b)=>{
   return a.price-b.price
});
const highToLow=products.slice(0).sort((a,b)=>{
   return b.price-a.price;
});
console.log(highToLow);