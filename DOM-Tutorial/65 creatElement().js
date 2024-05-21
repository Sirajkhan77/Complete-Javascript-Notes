//// It is long method of adding a new element to any inner html.
const todo=document.querySelector(".todo-ul");

const newLi=document.createElement("li");
const newLi_text=document.createTextNode("Layyah");
newLi.append(newLi_text);
todo.append(newLi); /// Now appended Successfully

//// Short wayy
newLi.textContent="Siraj";
todo.append(newLi);

/// Like append we have prepand and remove...



/// We also have befre and after 
const x= document.querySelector(".todo-ul");
const y=document.createElement("li");
y.textContent="SIraj khan";
x.before(y);
x.after(y);