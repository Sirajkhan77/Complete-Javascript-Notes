///// Bbehind the scene of how an event works
console.log("script started....")

const btn=document.querySelectorAll(".my-Buttons button");
// console.log(btn);
btn.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        let num=0;
        for (let i=0; i<=1000000000; i++){
            num+=i;
        }
        console.log(e.textContent, num);
    })
})

let x=0;
for (let v=0; v<=100000000; v++){
    x+=v;
}
console.log("value of outer variable is : ",x);
console.log("script ended....")