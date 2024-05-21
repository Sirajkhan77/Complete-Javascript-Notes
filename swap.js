const original = { a:1, b:2, c:3};
// Output: {1:a , 2:b, 3:c}  

const swapped = 
Object.fromEntries(Object.entries(original).map(([key,value]) => [value,key]));

console.log(swapped);