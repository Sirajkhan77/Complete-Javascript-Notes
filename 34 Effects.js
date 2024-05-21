////There are many effects of this function
function MakeUsers(firstName,lastName, email, age, address ){
    const users={};
    users.firstName=firstName;
    users.lastName=lastName;
    users.email=email;
    users.age=age;
    users.address=address;
    users.about = function(){// Old method 'about(){' not works.
        return `${this.firstName} is ${this.age} years old`;
    };
    users.is18 = function(){
        return this.age>=18;
    };
    return users;
}

const user1= MakeUsers("s1", "b" , "c", 19,"d");
const user2= MakeUsers("s2", "b" , "c", 20,"d");
const user3= MakeUsers("s3", "b" , "c", 21,"d");
// User4,5,6...n
// In this case , the 2 methods inside our function will be creates n*2 numbers of total function . So memory lost
// SO make a seperate object for these methods

////////////////////////////////////////////////////////////

const userMethods={
    about :function(){// Old method 'about(){' not works.
        return `${this.firstName} is ${this.age} years old`;
    },
    is18:function(){
        return this.age>=18;
    }
}

function createUsers(firstName,lastName, email, age, address ){
    const users={};
    users.firstName=firstName;
    users.lastName=lastName;
    users.email=email;
    users.age=age;
    users.address=address;
    users.about=userMethods.about;
    users.is18=userMethods.is18;
    return users;
}

const user4= MakeUsers("siraj", "b" , "c", 19,"d");
const user5= MakeUsers("khan", "b" , "c", 20,"d");
const user6= MakeUsers("umar", "b" , "c", 21,"d");

console.log(user5.about());
console.log(user6.about());

//Now better.. Memory is not wasted 
///
/////There is also an effect in this code, described in Effect2.js