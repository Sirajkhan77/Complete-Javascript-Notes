/// Classes in JS are fake 
/// let us now more enhance our previous code

class createUsers{
    constructor(firstName,lastName, email, age, address ){
        console.log("Contructor has been called");
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.age=age;
        this.address=address;
    }
    about(){
        return `${this.firstName} is ${this.age} years old`;
    }
    is18(){
        return this.age>=18;
    }

}
const user1= new createUsers("siraj", "b" , "c", 19,"d");
// We can not call constructor without of new keyword
const user2= new createUsers("khan", "b" , "c", 20,"d");
const user3= new createUsers("umar", "b" , "c", 21,"d");
console.log(user2.about());

console.log(Object.getPrototypeOf(user1));