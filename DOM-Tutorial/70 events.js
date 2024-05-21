//// event bassically means a work done, i.e. When a user clicks any utton , clicking is an event


//// There are many kinds of evenst . let us describe "MOUSE event"
/// In mouse event , there are also many functional event but most important is click event. 
/// There are three ways of adding event

///1)..We use it inside HTML... Onclick event ,,,, Very old 
//------>  <button class="btn btn-headline"   onclick="console.log('You Clicked me')  ">Sign Up</button>

///2).
const btn=document.querySelector(".btn-headline");
console.dir(btn);
btn.onclick=function(){
    console.log("You have clicked me");
}///Not good method

// 3).....>addEventListener();
const btn2=document.querySelector(".btn-headline");
btn2.addEventListener("click", ()=>{
    console.log("You clicked me......"); 
})