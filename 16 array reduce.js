//// Reduce Method 
///Sum off allll
const s1=[1,2,3,4,5,6,7,8,9];
const s2=s1.reduce((acc,cv)=>{
    return acc+cv;
})
console.log(s2);


////Real Life Exapmle...

const cart=[
    {id:1, name:"product#1", price:12000},
    {id:2, name:"product#2", price:15000},
    {id:3, name:"product#3", price:19000}
]

const totalPrice=cart.reduce((total,addToCart)=>{
    return total+addToCart.price;
},0)
console.log(totalPrice);