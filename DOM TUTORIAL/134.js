console.log("script start")

const bucket =["cofee","chips",'vegetables','salt','rice']

const friedRicePromise = new Promise((resolve,reject)=>{
if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
    resolve({value:"friedRice"})
}else{
    reject("could not do it")
}
})

friedRicePromise.then(
    (myfriedRice)=>{
        console.log("lets eat",myfriedRice)
    }
).catch(
    (error)=>{
        console.log(error)
    }
)

setTimeout(()=>{
    console.log("hhello from setTimeOut")
},0)

for(let i=0;i<=100;i++){
    console.log(Math.random(),i)
}

console.log("script end")