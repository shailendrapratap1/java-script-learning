// some method

const numbers = [3,5,8,9];

// kya ek bhi number esa hai jo even hai
// true 

// const ans=numbers.some((number)=>number%2===0);
// console.log(ans);
const userCart=[
    {productId:1, productName:"mobile",price: 3000},
        {productId:2, productName:"laptop",price: 3400},
    {productId:3, productName:"charger",price: 5500},
        {productId:3, productName:"charger",price: 255700},

]
const ans =userCart.some((cartItem)=>cartItem.price > 100000);
console.log(ans);