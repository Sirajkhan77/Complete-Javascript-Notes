// 6:35


//// we can use arrow functions . For this we have to pass 'event' or 'e'...

const allbtn=document.querySelectorAll("button");
for (let x of allbtn){
    x.addEventListener("click", (e)=>{
            console.log(e.currentTarget);/// Arrow function will work here
        })
}
