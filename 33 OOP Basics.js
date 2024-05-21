//////// Proto and prototype etc are very very important for Interviews....
//// OOP is very important for Interviews and we will learn many mistakes in this chepter....

//Very cheap and old method...
const usor={
    fname:"Siraj",
    lname:"Khan",
    email:"sirajkhan123@gmail.com",
    age:20,
    address:"layyah",
    about(){
        return `${this.fname} is ${this.age} years old`;
    },
    is18(){
        return this.age>=18;
    }
}

///suppose we need millions of users like user1, howww??
//we can do this work using oop...
// 1). Create a funtion
// 2). This function will create an object
// 3). Now add key value pairs to this object
// 4). This function will now return this object
function createUsers(firstName,lastName, email, age, address ){
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

const user1= createUsers("Siraj", "Younis" , "SirajKhan123@gmail.com", 19,{city:"Layyah",Chak:148});
console.log(user1);
const is18=user1.is18();
console.log(is18);
const data1=user1.about();
console.log(data1);