const todo=document.querySelector(".todo-ul");
const x=document.createElement("li");
x.textContent="Siraj Khan";
todo.append(x);

// const y=x.cloneNode(); In this case , There wil be no Text content ... Add Yourselfe or write true
const y=x.cloneNode();
y.textContent="Layyah";
todo.prepend(y);

/////This way to clone with same text contenrt
const z= x.cloneNode(true);
todo.prepend(z);