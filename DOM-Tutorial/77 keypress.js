////Key press

const body = document.body;
body.addEventListener("keypress", (e)=>{
    console.log(e.key);
} )


// ...., Mouse Over event 

const btn = document.querySelector(".btn-headline");
btn.addEventListener("mouseover", ()=>{
    console.log("Event occured");
})
btn.addEventListener("mouseleave", ()=>{
    console.log("Event Leaved");
})