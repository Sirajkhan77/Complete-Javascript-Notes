const x= document.querySelector(".form-todo");
const y= document.querySelector(".form-todo input[type='text']");
x.addEventListener("submit", (e)=>{
    e.preventDefault();
    const text=y.value;

    const newLi=document.createElement("li");
    const xx='<li class="first-todo"> <span class="siraj"> ${text} </span> <div class="todo-buttons"> <button class="btn done">Done</button> <button class="btn remove">Remove</button> </div> </li>';
    y.value="";
    

})