const arr=[5,43,67,56,487,9,76,453,2];
arr.sort();
console.log(arr);

// /// results are out of expectations
// 1=48
// 2=49
// 3=50
// 4=51
// 5=52
// 6=53
// 7=54
// 8=55
// 9=56
// Js has sorted numbers acc of this assci table...

// S O L U T I O N . . .
arr.sort((a,b)=>a-b);
console.log(arr);
//if  a-b = positive then swap both 
// else same 
// i.e. 67-56=11 (positive)=> swap(67,56) => 56,67








//////////////////////////
const arr2=[
    "siraj", "khan", "abcd", "aabc", "Bacd", "Siraj"
]
arr2.sort();
console.log(arr2);









//////////////////////////////////
// Realistic Exampleee of Sorting in JS 
// when we visit a website , they ask sometimes for a sort HighToLow and LowToHigh... They are using thisss...

const cart=[
    {id:1, name:"product#1", price:1200},
    {id:2, name:"product#2", price:1500},
    {id:3, name:"product#3", price:1900},
    {id:4, name:"product#3", price:1000},
    {id:5, name:"product#3", price:1300},
    {id:6, name:"product#3", price:2000},
]
const LowtoHigh= cart.slice(0).sort((x,y)=>{
    return x.price-y.price;
})
const HighToLow= cart.slice(0).sort((x,y)=>{
    return y.price-x.price;
})
const Id_Decending= cart.slice(0).sort((x,y)=>{
    return y.id-x.id;
})

console.log("\n\n\n Original Cart..\n");
console.log(cart);
console.log("\n\n Accending sorted Price Cart..\n");
console.log(LowtoHigh);
console.log("\n\n Decending sorted Price Cart..\n");
console.log(HighToLow);
console.log("\n\n decending sorted ID Cart..\n");
console.log(Id_Decending);


