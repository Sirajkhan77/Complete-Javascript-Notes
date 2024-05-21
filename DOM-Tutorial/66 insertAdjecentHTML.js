const todo=document.querySelector(".todo-ul");
// 1).  BeforeEnd
// 2).  Afterend
// 3).  BeforeBegin
// 4).  AfterBegin


todo.insertAdjacentHTML("beforeend", "<input type=\"password\" name=\"Confirm-Password\" id=\"Confirm-Password\" >")

//// By using this method , If we wanna make change in our HTML Or styling , we have to again select ....
////////// Most f the develpers use >>>>>>>>>>65 method....


//// If upper methods are not wprking , then use this ... 
// 1).  appendChild
// 2).  InsertBefore
// 3).  ReplaceChild
// 4).  RemoveChild