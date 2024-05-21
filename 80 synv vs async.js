/// Synchronous programing vs Asyncronous Programming
console.log("Starting");

// for (let x=0; x<10000; x++){
    // console.log("Hi");
// }/// First it will finish its task and block the whole below code. 

// console.log("ending");

/// Javascript is a synchronous language and single thread

const id = setTimeout(()=>{
    console.log("Timout Function");
},0); /// Very imp interview Q

for (let x=0; x<1000; x++){
    console.log("Hi");
}/// First it will finish its task and block the whole below code. 

console.log("Clearing Timeout");
console.log(id);
clearTimeout(id);
console.log("End");

// 25