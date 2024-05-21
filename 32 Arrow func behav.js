/// Behaviour of an arrow function is a little bit different then that of normal functions 
// Arrow function does not have this , it gets it from window
const user1={
    name:"siraj",
    age:20,
    about:()=>{
        console.log(this);
        console.log(this.name, this.age);
    }
}

const DbFunct1=user1.about.bind(user1, "Layyah", 1056);
DbFunct1();





///////////////////////////////////////////
/////////// EASY WAy of func in object
//Use this instead of arrow function

const user2={
    name:"siraj",
    age:20,
    about(){
        console.log(this);
        console.log(this.name, this.age);
    }
}
user2.about();