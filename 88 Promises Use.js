const heading1=document.querySelector(".heading1");
const heading2=document.querySelector(".heading2");
const heading3=document.querySelector(".heading3");
const heading4=document.querySelector(".heading4");
const heading5=document.querySelector(".heading5");
const heading6=document.querySelector(".heading6");
const heading7=document.querySelector(".heading7");

function siraj(element, text, color, time){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
            if (element){
                element.textContent=text;
                element.style.color=color;
                resolve();
            }
            else{
                reject("Element Does not Exists");
            }
        }, time) 
        }) 
}

const val = siraj(heading1,"One", "red", 1000);
val.then(()=>siraj(heading2,"Two", "green", 1000))
.then(()=>siraj(heading3,"Three", "blue", 1000))
.then(()=>siraj(heading4,"Four", "orange", 1000))
.then(()=>siraj(heading5,"Five", "violet", 1000))
.then(()=>siraj(heading6,"Six", "yellow", 1000))
.then(()=>siraj(heading7,"Seven", "brown", 1000))
.catch((error)=>{alert(error)})

///// 1:00:00