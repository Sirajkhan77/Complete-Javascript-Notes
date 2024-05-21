/////////*****Very imp */ for interviews
//The keyword function creates an empty object 'this={}' likr user. and latter on it will add key-val pairs to it and return it.
function about(name,age){
    // this={}    No need to declare it . Directly use it
    this.name=name;
    this.age=age;
    // No need to return as well .. It will automatically return
}
const user=new about("siraj",22);
about.prototype.is18=function(){
    if (this.age>=18){
        console.log("Allowed");
    }
    else{
        console.log("Not allowed");
    }
}
console.log(user);
user.is18(); // Hence it will automatically create the prototype


/////////////////////////////////////////////////////////////////


function createUsers(firstName,lastName, email, age, address ){
    // const users=Object.create(createUsers.prototype)
    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
    this.age=age;
    this.address=address;
}

const user1= new createUsers("siraj", "b" , "c", 19,"d");
const user2= new createUsers("khan", "b" , "c", 20,"d");
const user3= new createUsers("umar", "b" , "c", 21,"d");

///////////////////////////////////////////////////////////
createUsers.prototype.about=function(){
    return `${this.firstName} is ${this.age} years old`;
}
createUsers.prototype.is18=function(){
    return this.age>=18;
}

console.log(user2.about());

/// Make function with first letter capital which is called by new
/// When we want to see all keys of user1 , it gives us user1 keys as well as --proto-- keys . to avoid this we use hasOwnProperty();