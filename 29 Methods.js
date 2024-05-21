/// Methods 

//// Functions inside an object
//// 'This' method 

const obj={
    name:"siraj",
    age:20,
    about:function(){
        console.log(this);
        console.log(`Name of user is ${this.name} and his age is ${this.age}`);
    }
}
obj.about();
console.log("\n\n");


///////////////////////////////////////////
////////  Realistic Example 
function readInfo(){
    console.log(`Name is ${this.name} and age is ${this.age}`);
}//Arrow func not works 

const person1={
    name:"Adeel",
    age:24,
    about:readInfo
}
const person2={
    name:"Minub",
    age:14,
    about:readInfo
}
const person3={
    name:"Muna",
    age:30,
    about:readInfo
}
person1.about();
person2.about();
person3.about();
