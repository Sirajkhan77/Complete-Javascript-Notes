// Sets ( are also an iterable)
// Stores data , They have there own data . And can't be accessed by indexes 
// Orderless and no duplicates are allowed...
const x= new Set("siraj");
const x1= new Set(["siraj","khan","xxx","yyy"]);
const x2=new Set([1,2,3,4,4]); // one 4 is ignored 
const x3=new Set();
x3.add(9);
x3.add(8);
x3.add(7);
x3.add(6);
x3.add(6); /// Ignored 
x3.add(["y1", "y2"]);
x3.add(["y1", "y2"]);// Added because of diffrend address
const yy=["y3", "y4"];
x3.add(yy);
x3.add(yy);// Ignored 


///////////////////////////////////////////////
console.log(x);
console.log(x1);
console.log(x2);
console.log(x3);


if (x3.has(7)){
    console.log("7 Is present\n\n\n")
}else{
    console.log("7 Is NOT present");
}



 ///Iterable...
 for (let numb of x3){
    console.log(numb);
 }




 /// Why sets are used ??
 // sets are used for uniqueness.. They are mostly used for ID


 // Filter unique elements out of an array 
const arr=[1,2,4,2,5,6,3,6,7,8,6,9];
const Uniques=new Set(arr);
console.log(Uniques);
let length=0;
for (let l of Uniques){
    if (Uniques.has(l)){
        length++;
    }
}
console.log(length);
