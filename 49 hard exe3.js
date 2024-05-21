/// Inner function should be called only once.. i.e. if inner func is called for first time , it should print "You caled me" , and if it is called again and again no matters how many times , it should print "Already called".

function outer (){
    let counter=0;
    function inner(){
        if (counter<1){
        console.log("Called Successfully...")
        counter++;
        }
        else{
            console.log("Already called...");
        }
    }
    return inner;
}
const callme=outer();
callme();
callme();
callme();