console.log("Start...");
 const id=setInterval(()=>{
    console.log(Math.floor(Math.random()*100));
}, 1000);
console.log(id);
clearInterval(id);
console.log("End...");