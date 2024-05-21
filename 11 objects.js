//Objects (it is reffrance type like arrays)
// Arrays are good but not sufficient 
// For real world data
// Objects store key values pairs 
// Objects do not have index 

//How to create objects 

const person = {name:"siraj", age:19 , rollno:1056};
console.log(person);

const person2= {
    name:"Umer",
    age:18,
    hobby:"Muthal"
}
console.log("\n\n", person2)

// How to allow access data from objects 

console.log("\n\n\n",person.name);
console.log(person.age);
console.log(person.rollno);

// How to add key value pair to objects 
person2.gender="male(khassi)";

person2["person godness"]="Good boy";//Use in brakets for space only

console.log("\n\n\n", person2);
console.log(person2["person godness"]);

//How to add keys from outside objects

const key = "E-mail";//use this email as key
person[key]="sirajkhan123@gmail.com";
console.log("\n\n", person);



//How to iterate object 
const parson= {
    name:"Zain",
    Age:"Before Dinosors",
    Hobby:"Bondu"
}

// For in loop 
// Object Keys 

for ( let key in parson){
    console.log(`${key}: ${parson[key]}`);
}




// ____________________________________________
//Computed Properties
//use these keys and
const key1 = "objkey1";
const key2 = "objkey2";
//Store these values in them
const values1="myValue1";
const values2="myValue2";

const siraj={
    [key1]:values1,
    [key2]:values2
}

console.log(siraj);





// ______________________________________________
    //      SPREAD Operator

// In case of      Arrays 

        const array1=[1,3,5,7];
        const array2=[2,4,6,8];

        const NewArray = [...array1,...array2];
        console.log(NewArray);

        const NewArray2=[..."abc"];
        console.log(NewArray2);
    // Basically ( ... ) are used to spread anything


// In case of     OBJECTS


        const object1={
            key1:"value 1",
            key2:"value 2"
        }
        const object2={
            key3:"value 3",
            key4:"value 4",
            key1:"value unique" // Ak key 2 bar use nahi ho sakti . baad wali print ho gi. 
        }

        const NewObject = {
            ...object1, ...object2 , key_unique:"value-ultraunique"
        }
        console.log(NewObject);


// If we dont give any kry then its index will become its key >
    const NewObject2={
        ..."ABCD"
    }
    console.log(NewObject2);
console.log("\n\n\n\n\n");








// ______________________________________________
//       Destructuring Objects like arrays 


const singer={
    name:"NFAK",
    bestSong:"All",
    year:1850,
    name2:"RFAK"
}

        // //long way>
        // const Famous_Singer= singer.name;
        // const Famous_Song= singer.bestSong;
        // console.log(Famous_Singer,Famous_Song)

// short cut...
    const { name:var1,bestSong, year,name2} = singer;
    console.log(bestSong,var1,year,name2);














//____________________________________________
//          OBJECTS  inside  ARRAYS

const users = [
    {userID:1, userName:"Siraj", userGender:"Email"},
    {userID:2, userName:"Umar", userGender:"Email"},
    {userID:3, userName:"zain", userGender:"Email"}
]
// for (user of users){
// console.log(user.userName);
// }











//Nested destructuring...
const [{userName:khan,userID}, , {userGender}]=users;
console.log(userGender);
console.log(khan);
console.log(userID);