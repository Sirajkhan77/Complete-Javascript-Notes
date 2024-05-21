//// SEE 36 Ojects tricks first 


//// Now if we need millions of methods than we have to write these funcs inside userMethods() object and also write in our function .. This is mistake 



const userMethods={
    about :function(){// Old method 'about(){' not works.
        return `${this.firstName} is ${this.age} years old`;
    },
    is18:function(){
        return this.age>=18;
    }
}

function createUsers(firstName,lastName, email, age, address ){
    // const users={};
    const users=Object.create(userMethods)//New way
    users.firstName=firstName;
    users.lastName=lastName;
    users.email=email;
    users.age=age;
    users.address=address;
    // users.about=userMethods.about;
    // users.is18=userMethods.is18;
    return users;
}

const user1= createUsers("siraj", "b" , "c", 19,"d");
const user2= createUsers("khan", "b" , "c", 20,"d");
const user3= createUsers("umar", "b" , "c", 21,"d");


console.log(user1);
console.log(user3.about());

///9:46