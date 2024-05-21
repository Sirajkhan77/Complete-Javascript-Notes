//////////////////////////////////////////
//Almost same as that of every method...
//It will check only 1 number in whole array..

const arr=[2,4,6,9,10,12];
const answer=arr.some((number)=>{
    return number%2!==0;
})
console.log(answer);




///////////////////////////////////////////////////
//////REAL LIFE EXAMPLE ...
////cHECK One PRICE Greater THAN 3000
const cart=[
    {id:1, name:"product#1", price:1200},
    {id:2, name:"product#2", price:1500},
    {id:3, name:"product#3", price:1900},
    {id:4, name:"product#3", price:1000},
    {id:5, name:"product#3", price:1300},
    {id:6, name:"product#3", price:3500},//Yes
]

const ans=cart.some((x)=>{
    return x.price>3000;
})
console.log(ans);