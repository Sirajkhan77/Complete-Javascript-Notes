/// Mostly we create objects like this 
const obj1={
    k1:"v1",
    k2:"v2"
}
const obj2={};
obj2.k3="v3";
//But we can't access like this 
// console.log(obj2.k1);
// We want to do this in such a way that if firstly ceck obj2 , if not found then it should also check un surrounding objects
//we can do this by this way of creating empty objects 
const obj3=Object.create(obj1);
obj3.k4="v4";
console.log(obj3.k1); 
/// seee ___proto___:object in console
///___proto___ or [[prototype]] -----> Both are same
// But  'prtotype' is totally diffrent .
// console.log(obj2.__proto__);