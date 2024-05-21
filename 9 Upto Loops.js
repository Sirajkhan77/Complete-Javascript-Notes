//STRINGS CONCATENATION

let s1='siraj';
let s2='khan';

let s3=s1 +' '+s2;
console.log(s3);


let a1= "12";
let a2= "14";

let z3= +a1 + +a2;
console.log(z3);



// ===================================================




//     TAMPELATE SRTING

let age=14;
let name='siraj';


// let aboutMe = "My name is " + name + " and my age is " + age;
// console.log(aboutMe);


// Tampelate

let aboutMe = `And My name is ${name} and my age is ${age}`;
console.log(aboutMe);



// ==================================================

// Booleans and equal comparisons/
// True False 

let num1= "9";
let num2= 9 ;
console.log(num1>num2);

// Double equal will check only value notv datatypes 
console.log(num1==num2);
console.log(num1===num2);

console.log(num1!=num2);
console.log(num1!==num2);



// ==================================================



// if else Conditions

let  ageOfPlayers=17;
if (ageOfPlayers>=18){
    console.log("user can play the game");
} else{
    console.log("user can not play the game");
}

// checking even odd by reminder

let numm=18;
if (numm%2==0){
    console.log("It is an even number");
}else{
    console.log("It is an odd number");
}



// Truthly & Falsy values 
// falsy: false, "" , null , undefined , 0 ==> Means you can avoid these outputs by using if else

let nameOfEmp=""; //false
let nameOfEmp2;  //undefined
let nameOfEmp3=null;  //null

if(nameOfEmp){
    console.log(nameOfEmp);
}else{
    console.log("User's name not found");
}


// =================================================



let ageOfChild=13;
let drink;
if(ageOfChild>5){
    drink="coffee";
}else{
    drink="milk";
}

console.log(drink);


// You can use short cut method of if else which is called ternary operator / conditional operator 

let child=3;
let drunk = child>=5 ? "coffee" : "Milk";
console.log(drunk);





// =================================================

// AND==>"&&"    &    OR==> ||  Operators
let age2=19;
let name2="Siraj";
if( name2[0]=== "S" && age2>18){
    console.log("Yes name starts with S and Age is above 18");
}

// in && if any one conditions is false then else will run...  And in || if any one condition is true , main statement will come

// =================================================

// Nested if else || Game

let winningNumber=18;
// let userGet= +prompt("Enter a number"); 


// Uncomment for check

// if (userGet===winningNumber){
//     console.log("Correct! You entered a matching number");
// }else{
//     console.log("Opps! You entered a wrong number");
// }

// ==================================================
// Else If 

let tempInDeg=33;

if (tempInDeg<0){
    console.log("Its too extreemly cold outside");
}
else if (tempInDeg < 16){
    console.log("Its cold outside");
}
else if (tempInDeg < 26){
    console.log("Weather is okay");
}
else if (tempInDeg < 36){
    console.log("Lets go for a swim");
}
else if (tempInDeg < 45){
    console.log("Turn on AC");
}
else {
    console.log("Its too extreemly hot outside");
}




// ==================================================

// Switch case 

let number2 = 3;

switch(number2){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuseday");
        break;
    case 3:
        console.log("Wednessday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Number...");
        break;
}



// ===============================================
// While loop/

let i=0;
while(i<=3){
    console.log(i);
    i++;
}

console.log(`Current value of i is ${i}`);



// Calculate the sum of first 10 natural nubers


let theTotal=0;
let j=0;

while(j<=10){
    theTotal= theTotal+j;
    j++;
}
console.log(theTotal);

// short cut formula ==>  (n*(n+1))/2;
let k=10;
let theTotal2= (k*(k+1))/2;
console.log(theTotal2);


// ===============================================


// ===>>>>    FOR LOOPS 
let l=0
for (; l<=3; l++){
    console.log(l);
}
console.log(`The value of l is ${l}`);


//Sum of  10 numbers

let m=0;
let mTotal=0;
for (; m<=100 ; m++){
    mTotal=mTotal+m;
}
console.log(mTotal);


//Break and continue Keywords in for looops 

for (let n=1; n<=10; n++){
    if (n==5){
        break;
    }
    console.log(n);
}

// Continue statement will skiip that number

// for (let o=1; o<=10; o++){
//     if (o==5){
//         continue;
//     }
//     console.log(o);
// }



// ===========================================
//Do while loop 

let p=10;
do{
    console.log(p);
    p++;
    p++;
}while(p<=9);
console.log(`The values of p is ${p} `);