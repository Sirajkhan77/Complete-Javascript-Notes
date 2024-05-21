//Even or odd
const siraj =function(n1){
    return n1%2===0;
}

console.log(siraj(5))






//target
function khan(arr, t ){
    for (i in arr){
        if(arr[i]==t){
            return i;
        }
    }
    return -1;
}

let arry=[1,2,3,4,5,6,7,8,9];
let tt=6;
let x=khan(arry, tt);
if (x==-1){
    console.log("Not fond");
}else{
    console.log("present at : ", x);
}






//ARRROW FUNCTIONS 
const arrrowFunc =n1 =>{
    return n1%2===0;
}

console.log(arrrowFunc(5))

/////////////////
const xx = anyString=> anyString[0]; //Whole function
console.log(xx("Siraj"));





////Fuction inside function
function calculator(){
    const print= () =>{
        console.log("My name is siraj Khan");
    }
    const add=(x1,x2) =>{
        return x1+x2;
    }
    const multi=(z1,z2)=> z1*z2;

    console.log("Hello There! This is a calculator");
    print();
    console.log(add(5,5));
    console.log(multi(5,5));
}

calculator();
console.log("\n\n\n");






/////////////
//  Lexical Scope 
const myval=5555;
function sss(){
    const printt=()=>{
        console.log("Value inside function",myval);
    }
    console.log("Value outside inner function", myval);
    printt();
}
sss();










///////////////////////////////////////////////
///  Black scope vs Function scope 
///  let and const are black scope
///  var is function scope 
{
//block 1 
var xxx="siraj khan";
}
console.log(xxx);
{
//block 2
}










/////////////////////////////////////////////
///   Rest perameters 
const vvv=(a,b,...c)=>{
    console.log(`A is ${a}`);
    console.log(`B is ${b}`);
    console.log(`C is ${c}`);
}

vvv(1,2,3,4,5,6,7,8,9);

// Exercise: summm all bbb(1,2,3,4,5,6,7,8,9);
const bbb=(...x)=>{
    let sum=0;
    for (let n of x){
        sum+=n;
    }
    return sum;
}
const k=bbb(1,2,3,4,5,6,7,8,9);
console.log(k);

//Sum of all evens btw 1 and 20
const Evens=(...eve)=>{
    let f=0;
    let x1=0;
    for (let i of eve){
        if (i%2==0){
            f+=i;
        }
        else{
            x1+=i;
        }
    }
    console.log(`Sum of evens: ${f}`);
    console.log(`Sum of odds: ${x1}`);

}
Evens(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);



console.log("\n\n");
///////////////////////////////////////////
/////////////Passing objects in function
// Destructuring of Obj
const objj={
    name:"siraj",
    from:"layyah",
    age:22
}

const bjj=(obj)=>{
    console.log(obj.name);
    console.log(obj.from);
    console.log(obj.age);
}
bjj(objj);
// Or bjj({name:"siraj", age:22});
console.log("\n\n");








/////////////////////////////////////////
////////  Call back functions.....
//Passing Func inside func

const f1=(namm)=>{
    console.log("This is passing function...");
    console.log(`This is name: ${namm}`);
}
const f2=(callback)=>{
    console.log("This is my func ");
    callback("Siraj khan chandia ");
}

f2(f1);
console.log("\n\n")









/////////////////////////////////////////
////// Functionnns returning functions...
function myFunc(){
    console.log("This is my func..");
    function insideFunc(){
        console.log("This is Inside func..");
    }
    return (insideFunc);
}
let c1=myFunc();
c1();