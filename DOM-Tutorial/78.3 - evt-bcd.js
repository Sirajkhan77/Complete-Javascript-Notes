/// Event Bubbling | Capturing | Delegation
const grandParent= document.querySelector(".grandparent");
const parent= document.querySelector(".parent");
const child=document.querySelector(".child");
const body=document.body;






////////////////////////// EVENT BUBBLING...
child.addEventListener("click",()=>{
    console.log("Child...");
})
parent.addEventListener("click",()=>{
    console.log("parent...");
})
grandParent.addEventListener("click",()=>{
    console.log("grand parent...");
})
body.addEventListener("click",()=>{
    console.log("Body...");
})//In this case , when we click on child , all others will also be get printend.
///////////////////////////////////////////////





/// Event capturing
child.addEventListener("click",()=>{
    console.log("capture !! Child...");
}, true)
parent.addEventListener("click",()=>{
    console.log("capture !! parent...");
}, true)
grandParent.addEventListener("click",()=>{
    console.log("capture !! grand parent...");
}, true)
body.addEventListener("click",()=>{
    console.log("capture !! Body...");
}, true)
/////////////////////////////////////////////////////



grandParent.addEventListener("click", (e)=>{
    console.log(e.target);
})


//// It works for all and this process is called delegation... 7.50