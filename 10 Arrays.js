let a=["apple", "banana", "mango"];
console.log(a);

let b=["apple", undefined, null , 0,1,2,1.23];
console.log(b);


//changing the values using index number

a[1]="nashpati";
console.log(a);

//To check if 'b' is an array

console.log(Array.isArray(a)); 




console.log("\n\n\n");

//   >>>>>>   PUSH   &    POP in arrays 

let array1=["Sunday", "Monday", "Tuseday"];

array1.push("Wednessday");
array1.push("Thursday");
console.log(array1);

array1.pop();
console.log(array1);

let poppedDay=array1.pop();
console.log("Again pop: " , array1);
console.log("New Popped Value: ", poppedDay);

console.log("\n\n\n");
//Unshift/shift  is opposite off push/pop , is works for the lowest firstly added values

array1.unshift("saturday");
array1.unshift("Friday");
console.log("After Unshift" , array1);

array1.shift();
console.log("After Shift" , array1);




console.log("\n\n\n");


// ==================================================

// Premitive and Referance data-types

let n1=5;
let n2=n1;
n1++;
console.log("Value of n1 After increment:",n1);
console.log("Value of n2 After increment:",n2); //3:09

// referance type (works for arrays)
console.log("\n\n\n");

let arr1=["A1","A2"];
let arr2=arr1;

arr1.push("A3");
console.log("Arr1 after push:",arr1);
console.log("Arr2 after push:",arr2); //3:13




console.log("\n\n\n");
// ====================================================

// How to clone array (making copy)
let ar1=["siraj","khan"];
let ar2=ar1; // this is not clonning
ar1.push("chandia"); // Before cloning it works for all , after cloning it works only for ar1

console.log("arr2=",ar1);
// Both of these arrays are same . Lets check 
console.log(ar1===ar2); //They works like a single arr


//cloning will make another same array but works itself
//clone
let ar3=ar1.slice(0);
console.log("ar3=",ar3);
console.log(ar1===ar3);


//Another mathod
let ar4=[].concat(ar1);
console.log("ar4=",ar4);
console.log(ar1===ar4);

// Another new and easy method
let ar5=[...ar1]
console.log("ar5=",ar5);
console.log(ar1===ar5);

//To add extra items in clonner arr
let ar6 = ar1.slice(0).concat(["hello", "word"]);
console.log("ar6=",ar6  ,  "\n\n\n");







// ====================================================

// For loops in array
console.log(array1.length);//imp property for  arr
console.log(array1[array1.length-1] ,"\n\n"); // for last , -2 for 2nd last

for(let j=0; j<=array1.length-1; j++){
    console.log(array1[j].toUpperCase());
}


let days=[];
for(let k=0; k<=array1.length-1; k++){
    days.push(array1[k].toUpperCase());
}

console.log(days);
console.log("\n\n\n\n")






// ===============================================
// Using const(instead of let) for creating arrays.
const pi=3.1428;
// pi=12;
//const values can not be changed

const names=["umer", "zain"];
names.push("siraj");
console.log(names);  // in case of arrays , const changes for push pop etc just like n++; described before... same address

// names=["khan"]  cannot be changed 

// 90% users use const for creating arrays
console.log("\n\n\n\n")






// ================================================
//While loops in arrays

const loop = ["L1", "L2", "L3", "L4"];
let l=0;
while (l<loop.length){
    console.log(loop[l].toUpperCase());
    l++;
}
console.log("\n\n\n\n")





// =================================================
// For of loops 
const loop3=[];
for (let loop2 of loop ){
    loop3.push(loop2);
}
console.log(loop3);


//For in loops gives only indexes
const xx3=[];
for (let xx2 in loop ){
    xx3.push(xx2);
}
console.log(xx3);
// To print , write







// ========================================
// Arrays Destructing
const myArray=["item 1","item 2","item 3","item 4", "item 5", "item 6"];

//long method
let myVar1=myArray[0];
let myVar2=myArray[1];
console.log("value of myVar1:",myVar1);
console.log("value of myVar2:",myVar2 , "\n\n\n");

//short cut
let[myVar3, myVar4 , , myVar5, ...myNewArray]=myArray;
console.log("value of myVar3:",myVar3);
console.log("value of myVar4:",myVar4);
console.log("value of myVar5:",myVar5);

// let myNewArray= myArray.slice(2); instead of this , use ...myNewArray.. Baki bachay tamam is ma store ho jy ga 

console.log(myNewArray); 