const x= document.querySelector("a");
console.log(x.getAttribute("href"));

const x2= document.querySelector(".todo-section input");
console.log(x2.getAttribute("placeholder"));

////  Now lets change it 
x.setAttribute("href", "www.google.com");
console.log(x.getAttribute("href"));