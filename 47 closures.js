///// Closures 

function printFname(fname,lname){
    function print(){
        console.log(fname,lname);
    }
    return print;
}

const ans = printFname("Siraj", "Khan");
ans();


//// how?
// if A function returning an inner function , then the inner function will have a "CLOSURE"  in which the lexical i.e. The variables of outer function will be stored.
// Now whenever inner function is callled , fisrt it will check its own memory then it will check its closures.







/////////////////////////////////////////////////////////////
/// EXAMPLE 1

function hello(x){
    const a= "aaa";
    const b= "bbb";
    return function(){
        console.log(a,b,x);
    }
}
const ans2=hello("xxx");
ans2();

