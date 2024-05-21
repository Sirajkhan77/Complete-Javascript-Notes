// Get elements by class names 

const x= document.getElementsByClassName("one-section"); /// Directly pass strings 
console.log(x);
//  it creates an array like string , hence we can access them by using the indexes
console.log(x[2]);



//// Does query selector All is not same /// No , but works almost same 
const x2= document.querySelectorAll(".one-section"); /// Directly pass strings 
console.log(x2); /// Gives us nodelist
// but we can also access the elements having class one-section by using indexes here as well
console.log(x2[1]);