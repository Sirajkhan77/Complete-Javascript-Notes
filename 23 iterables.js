///What are iterables 
///Iterables are those on which we can apply for of loops
/// String and array are iterables 


const str="siraj";
for (i of str){
    console.log(i);
}


const arr=["Siraj", "khan", "askj", "sqwe"];
for (x of arr){
    console.log(x);
}

///Objects are  not Iterable 
const obj = {
    name:"siraj",
    rno: 1056,
    from:"Layyah"
}

for (y of obj){
    console.log(y); /// Errrorrr 
}