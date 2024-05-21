/// Promise  Means FUTURE VALUE
console.log("Script Started...");

const bucket=['vegitables', 'rice', 'banana' , 'chips' , 'salts'];

const x=new Promise((resolve,reject)=>{
    if (bucket.includes('vegitables') && bucket.includes('salts') && bucket.includes('rice')){
        resolve("Fried Rice!!");
    }else{
        reject("Could not make");
    }
})///Promise has been produced successfully

/// Now the most important thing is to consume that promise
x.then((dataRecieved)=>{
    console.log(dataRecieved);
}
).catch(
    (error)=>{
        console.log(error);
})
////added to microtask queue

setTimeout(()=>{
    console.log("Hello there from SetTimeout")
},0);   /// Added to callback queue


for (let i =0; i<20; i++){
    console.log(Math.floor(Math.random()*10000), i);
}

console.log("Script Ended...");