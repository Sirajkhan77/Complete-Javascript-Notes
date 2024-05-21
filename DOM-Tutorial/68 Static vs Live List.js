const y=document.querySelectorAll(".todo-ul li");
// console.log(y);
const newli=document.createElement("li");
newli.textContent="Item 6";
const ul=document.querySelector(".todo-ul");
ul.append(newli); 
console.log(y); //// Nodelist is still 5, it means that it is static nodelist

//----------------------------------------//
// QuerySelectorall Gives us static nodelist but GetElementBySomething will give us  live node 
const ul2=document.querySelector(".todo-ul");
const newli2=ul.getElementsByTagName("li");
console.log(newli2);

