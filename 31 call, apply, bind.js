///All are for functions 
///////////////////////////   Call....
function x(){
    console.log("hi");
}
// x();
// x.call();
///////////////////////// Realistic ex

const user1={
    name:"siraj",
    age:20,
    about:function(from,rno){
        console.log(`Name of user is ${this.name} and his age is ${this.age}`);
        console.log(`He is from ${from} and his roll number is ${rno}`);
    }
}

const user2={
    name:"Adeel",
    age:24
}
//How can we access user2 data by about of user1
user1.about.call(user2,"layyah", 1056);
console.log("\n\n");

/////////////////////////////////////////////

function about2(from,rno){
    console.log(`Name of user is ${this.name} and his age is ${this.age}`);
        console.log(`He is from ${from} and his roll number is ${rno}`);
}
about2.call(user2,"Multan", 123);
console.log("\n\n");
/////////////// APPLY.....
about2.apply(user1, ["Lahore", 555]);// We have to pass all args as an array 
console.log("\n\n");


//////////////////////////////////////////////////////
/////////////////// B I N D . . .

const person3={
    name:"Muna",
    age:30
}
// It returns a function . So we have to store it .. Which we can use latter.. So it is Awesome 
const siraj = about2.bind(person3, "Islamabad", 946);
siraj();

console.log("\n\n");
/////////////////////////
// Don't do this mistake
const siraj2= user1.about;
//siraj2();
///Use this way
const siraj3= user1.about.bind(user1, "i-10", 999);
siraj3();