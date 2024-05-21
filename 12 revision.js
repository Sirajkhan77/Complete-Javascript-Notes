const cart=[
    {id:1, name:"product#1", price:1200},
    {id:2, name:"product#2", price:1500},
    {id:3, name:"product#3", price:1900},
    {id:4, name:"product#3", price:1000},
    {id:5, name:"product#3", price:1300},
    {id:6, name:"product#3", price:2000},
]



///  S O R T  


const LowtoHigh= cart.slice(0).sort((x,y)=>{
    return x.price-y.price;
});

const HighToLow=cart.slice(0).sort((x,y)=>{
    return y.price-x.price;
});


console.log("\n\n\n Original Cart..\n");
console.log(cart);
console.log("\n\n Accending sorted Price Cart..\n");
console.log(LowtoHigh);
console.log("\n\n Decending sorted Price Cart..\n");
console.log(HighToLow);












