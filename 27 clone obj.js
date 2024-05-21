//Clone using the Ovject.assign
const obj1={
    k1:"v1",
    k2:"v2"
}
const obj2=obj1;
obj1.k3="v3";  // added to both 

console.log(obj1); 
console.log(obj2);
//This is not a clone.. if we add something to obj1, it will also be added to obj2.....
console.log("\n\n\n");


//////////////////////////////////////////////////
/// Method 1
const obj3={...obj1};
obj1.k4="v4";  // added to one
console.log(obj1); 
console.log(obj3);

/// Method 2
const obj4=Object.assign({},obj1);
obj1.k5="v5";  // added to one
console.log(obj1); 
console.log(obj4);
