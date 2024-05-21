

/// What if I want to resolve or reject promise after 2 seconds


function siraj(){
    const value = true;
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (value){
                resolve("Passed");
            }
            else{
                reject("Failed");
            }
        },2000)
    })
}

siraj().then(x=>{
    console.log(x);
}).catch(y=>{
    console.log(y);
})