/// We can say that there is a bug in JS,, When we say consol.log(This), It will give us whole window info 
console.log(this);
//Inside a function as well 
function s(){
     console.log(this);
}
s();
// To avoid this bug , we use---> "use strict"
function khan(){
    "use strict"
    console.log(this);
}//Not works on arrow func

khan();//undefined now


/// We mostly use ---> "use strict" on header like #include<iostream>

