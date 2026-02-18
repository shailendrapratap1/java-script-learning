// function returning promises
function ricePromise(){
    const bucket =["cofee","chips","vegetables","salts","rice"];
    return new Promise((resolve,reject)=>{
        if(bucket.includes("vegetables")&& bucket.includes("salt")&& bucket.includes("rice")){
            resolve({value:"friedrice"})
        }else{
            reject("could not do it")
        }
    })
}
ricePromise().then(
    (myfriedRice)=>{
        console.log("lets eat,",myfriedRice)
    }
)
.catch(
    (error)=>{
        console.log(error)
    }
)