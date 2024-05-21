const btn2=document.querySelector(".btn-headline");
const siraj= function(){
        console.log("Value of this is:"); 
        console.log(this); 
}
btn2.addEventListener("click", siraj);

//// Arrow function  = window            //// Interview Q
//// Normal function = btn itself
