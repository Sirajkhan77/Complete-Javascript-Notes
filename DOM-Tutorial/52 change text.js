/// change text 
/// textContent and innerContent 
const x= document.querySelector("#main-heading");
console.log(x.textContent);  
// Now lwts change it 
x.textContent="This is my Website";

console.log(x.textContent);  ////It gives us all the text even it is hidden i.e. spans with display none

console.log(x.innerText);  //// It gives us what text is shown on the browser , not hidden text i.e. spans with display none
