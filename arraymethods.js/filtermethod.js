// filter method

const numbers =[1,3,4,5,6,7,5,4];



const evenNumbers = numbers.filter((number)=>{
    return number %2==0;
})
console.log(evenNumbers);