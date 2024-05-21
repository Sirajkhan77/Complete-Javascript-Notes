
// const userMethods={
//     about :function(){// Old method 'about(){' not works.
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18:function(){
//         return this.age>=18;
//     }
// }
////////////Instead of using this , make these functions inside prototype of the function.



function createUsers(firstName,lastName, email, age, address ){
    const users=Object.create(createUsers.prototype)//New way
    users.firstName=firstName;
    users.lastName=lastName;
    users.email=email;
    users.age=age;
    users.address=address;
    return users;
}

const user1= createUsers("siraj", "b" , "c", 19,"d");
const user2= createUsers("khan", "b" , "c", 20,"d");
const user3= createUsers("umar", "b" , "c", 21,"d");

///////////////////////////////////////////////////////////
createUsers.prototype.about=function(){
    return `${this.firstName} is ${this.age} years old`;
}
createUsers.prototype.is18=function(){
    return this.age>=18;
}

console.log(user2.about());