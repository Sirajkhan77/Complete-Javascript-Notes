console.log("Hello world")

const arr=["siraj",  "khan", "Nawaz", "King", "Chandia"];
const ans = arr.find((string)=>{
    return string.length===4;
})
console.log(ans);





////////////////////////////
// Realistic Example
const users=[
    {id:1,name:"siraj"},
    {id:2,name:"khan"},
    {id:3,name:"Zain"},
    {id:4,name:"Pisti"},
    {id:5,name:"xzcv"}
]

const x=users.find((str)=>{
    return str.id===4;
})
console.log(x);