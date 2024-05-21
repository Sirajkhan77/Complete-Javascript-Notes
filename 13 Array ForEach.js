//////////////////////////////////////
//////// For Eaach........
/////////////////////////////////
const arr=[4,2,6,8];
const myFunc=(a,b)=>{
    console.log(`Index is ${b} and ${a}^2 = ${a*a}`);
}
// for (i in arr){
//     myFunc(arr[i],i);  Toooo Biggg
// }

arr.forEach(myFunc);
console.log("\n\n\n");

////Orr 
arr2=[2,3,4,5,6];
arr2.forEach(function (numb,ind){
    console.log(`Index is ${ind} and ${numb}*2 = ${numb*2}`);
})
console.log("\n\n\n");



users=[
    {name:"Siraj",age:22},
    {name:"Khan",age:20},
    {name:"chandia",age:19},
    {name:"shah",age:18}
]

users.forEach((n1)=>{
    console.log(`Name is ${n1.name} and age is ${n1.age}`);
})
console.log("\n\n\n");
