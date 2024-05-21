/// What if we are asked to change the colors of all labels of the form to blue
// It can be done by using Loops 
// const x= document.getElementsByClassName("nav-items");
let x= document.getElementsByTagName("a");
console.log(x[1]);
//// In case of this , we can use 
// simple for loops 
// For of loops 
/// But we can't use foreach loops 


/// Simple loop
for (let i=0; i<x.length; i++){
    const y=x[i];
    y.style.backgroundColor="white";
    y.style.color="black";
    y.style.fontWeight="bold";
}

// for of loops 
for(let l of x){
    l.style.padding="0.5rem";
    l.style.marginLeft="0.5rem";
}

// we can not  use for  each loops becouse they works on making a function and returning a result

////////////////////////////////////////////////

//  we can change this html collection into an array

allTags= Array.from(x);
console.log(Array.isArray(allTags));

// and now we can apply all the methods of an array to all "a" tags 

