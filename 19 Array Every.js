///Every method returns true or false after checking all the vals in an array ... It checks all elements . if anyone is false itll return false 

const arr=[2,4,6,9,10,12];
const answer=arr.every((number)=>{
    return number%2===0;
})
console.log(answer);



///////////////////////////////////////////////////
//////REAL LIFE EXAMPLE ...
////////////////////////////////////////////
///////////cHECK ALL PRICES ARE LESS THAN 3000
const cart=[
    {id:1, name:"product#1", price:1200},
    {id:2, name:"product#2", price:1500},
    {id:3, name:"product#3", price:1900},
    {id:4, name:"product#3", price:1000},
    {id:5, name:"product#3", price:1300},
    {id:6, name:"product#3", price:2000},
]

const ans=cart.every((x)=>{
    return x.price<3000;
})
console.log(ans);