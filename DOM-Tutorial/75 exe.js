const btn=document.querySelectorAll(".my-Buttons button");
// console.log(btn);
btn.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        e.currentTarget.style.backgroundColor="yellow";
        e.currentTarget.style.fontSize="1.2rem";
        e.currentTarget.style.color="Blue";
        e.currentTarget.style.padding=".8rem";
    })
})