/// The upper function gets an argument which shoud be the power of whatever passed in inner function 
// i.e. const inner= upperfunc(3);
// inner (5) ----->  5*5*5  ----> 125

function upperFunct(x){
    function innerFunct(y){
        console.log(y**x);
    }
    return innerFunct;
}

const inner=upperFunct(3);
inner(5);


/////////// Pro 

const upfunc= power => number => number**power
