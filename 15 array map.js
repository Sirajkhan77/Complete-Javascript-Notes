/////// Map Method is very  important...
//////  USED EVERWhere 

///for each method doesnt returns , it only cosole the values , use those  index end values 
//But map creats another array, returns anyting which you want.

arr=[2,3,4,5,6,7,8];
const sq=(n1)=>{
    return n1*n1;
}
const khan = arr.map(sq);
console.log(khan);
console.log("\n\n");
//Now we have new array khan having square of all numbers of arr


const k2=arr.map(n2=>{
    return n2*3;
})
console.log(k2);
console.log("\n\n");

/////////////////////////////////
const k3=arr.map((n3,n4)=>{
    return `Index is ${n4} and its square is ${n3*n3}`;
})
for (x of k3){
    console.log(x);
}








///////////////////////////////////////////////////
//////////// Let us take an Realistic example......
users=[
    {name:"Siraj",age:22},
    {name:"Khan",age:20},
    {name:"chandia",age:19},
    {name:"shah",age:18}
]

const userNames=users.map((x1)=>{
    return x1.name;
})
console.log(userNames);