let x=Math.floor(Math.random*100);
function siraj(num,c){
    if (num<c){
        console.log("Low");
    }
    else if (num>c){
        console.log("High");
    }
    else if(c==num){
        console.log("Corrrect...");
    }
}

siraj(6,x);