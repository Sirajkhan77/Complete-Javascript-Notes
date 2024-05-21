////////////////////////////////////////////////////
//////////////  M  A  P  S  ////////////////
//Maps are also iterables.
// stores te data in ordered fashion
// It stores key value paire like objects , But same keys are not allowed

//////Ojectss.....>> They can have only strings or symbols as key
//////Maps........>> We can use anything as a key like array , number , string 

const user1=new Map();
user1.set('name', 'siraj');
user1.set('age',19);
user1.set(911, 'Emergency Number');
user1.set([1,2,3,4], 'Array as  key');
user1.set({1:'One'}, 'Obj as  key');

console.log(user1);
console.log(user1.get('age'));
console.log(user1.get(911));
console.log("\n\n\n");

for (x of user1.keys()){
    console.log(x, typeof(x));
}
console.log("\n\n\n");

for ([key, val] of user1){
    console.log(key,val);
}
console.log("\n\n\n");

//On objects ,, For of loop not allowed 
// But we can do this in Map 


const user2=new Map([['name','siraj'],['age',20],[890,'code']]);
console.log(user2);
console.log("\n\n\n");







//////////////////////////////////////////////
//Realistic example.... 

///Change oject using map
const pers1={
    id:1,
    name:"khan"
}
const pers2={
    id:2,
    name:"adulljk"
}

const m1=new Map();
m1.set(pers1,{age:12, gender:"male"});
m1.set(pers2,{age:46, gender:"Email"});
console.log(m1);
console.log(m1.get(pers1).gender);
console.log(m1.get(pers2).gender);