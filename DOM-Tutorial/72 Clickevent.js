// const firstBtn=document.querySelector("#one");
// firstBtn.addEventListener("click", function(){
//     // console.log("You clicked me");
// })


const allbtn=document.querySelectorAll("button");
console.log(allbtn)

for (let x of allbtn){
    x.addEventListener("click", function(){
            console.log(this.textContent);/// Arrow function will give undefined
        })
}
