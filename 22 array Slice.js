/////Splice , not slice 

//It is used for insertion and deletion in array at a specific position


//Deletion
arr=[1,2,3,4,5,6,7,8,9];
// (Strat from index, delete number of elements , Insert )
arr.splice(2,3);
console.log(arr);

///////////////////////////
//Insertion
arr.splice(5,0,"insert");
console.log(arr);






///////////////////////////////
///Both
x=["x1","x2","x3","x4","x5","x6","x7","x8"];
//(strart, delete , insert)
x.splice(3,2,"y4","y5");
console.log(x);