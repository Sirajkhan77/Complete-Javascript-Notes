function siraj(){
    const bucket=['vegitables', 'rice', 'banana' , 'chips' , 'salts'];
    return new Promise((resolve,reject)=>{
        if (bucket.includes('vegitables') && bucket.includes('salts') && bucket.includes('rice')){
            resolve("Fried Rice!!");
        }else{
            reject("Could not make");
        }
    })
}

siraj().then((dataRecieved)=>{
    console.log(dataRecieved);
}
).catch(
    (error)=>{
        console.log(error);
})