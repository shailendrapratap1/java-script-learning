// evry method
// const numbers =[2,4,6,1,0];


// // const ans = numbers.every(isEven);


// const ans=numbers.every((number)=>number%2===0);

// // callback function ---> true/fLSE(boolean)

// // every method ---- true?false (boolean)
// console.log(ans);

const userCart=[
    {productId:1, productName:"mobile",price: 3000},
        {productId:2, productName:"laptop",price: 3400},
    {productId:3, productName:"charger",price: 5500},
]
const ans =userCart.every((cartItem)=>cartItem.price< 30000);
console.log(ans);