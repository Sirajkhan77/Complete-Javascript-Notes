// function siraj(callback){
//     console.log("task 1");
//     callback();
// }
// function chandia(){
//     console.log("task 2");
// }

// siraj(chandia);
// siraj(()=>{
//     console.log("task 3")
// })


function f1(n1,n2,callback){
    console.log(n1,"+",n2);
    if (typeof n1===Number && typeof n2===Number){
        callback(n1,n2);
    }
    else{
        console.log("Please pass numbers");
    }
}

function f2(n3,n4){
    console.log(n3+n4);
}

f1("1","2",f2);



////53