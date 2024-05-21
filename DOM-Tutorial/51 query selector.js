// select the element using query selectors 

const x= document.querySelector("#main-heading");
/// rule: id can not be repeated 
console.log(x);


//  It selects the elements like css

const container=document.querySelector(".container");
console.log(container)
// Classes can be repeated but if we have repeated classes then we can get only first class's document  ,, How to avoid 
const container2=document.querySelectorAll(".container");
/// all objects having class container will be found 