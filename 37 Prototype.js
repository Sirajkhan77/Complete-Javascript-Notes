// In javascript ,, Functions can also work as an object 
/// i.e. We can treat functions like objects 
function helllo(){
    console.log("Hello world");
}
console.log(helllo.name);// It will tell us name of function
// Setting key-val pair 
helllo.OwnProperty="This is unique own property...";
console.log(helllo.OwnProperty);



/// Function provides many other usefull properties as well 
//Functions gives us a free space {...} i.e. empty objects
// This is called prototype 
///   {} ===> 'Prototype'
helllo.prototype.name="siraj";
helllo.prototype.age=20;
helllo.prototype.sing=function(){
    return `aaaaaaaxxxxxxxxa`;
}
helllo();
console.log(helllo.prototype.sing());