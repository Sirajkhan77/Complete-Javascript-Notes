//// Callback , callback hell , pyramid of doom
/// Aasynchrounos programming 

const heading1=document.querySelector(".heading1");
const heading2=document.querySelector(".heading2");
const heading3=document.querySelector(".heading3");
const heading4=document.querySelector(".heading4");
const heading5=document.querySelector(".heading5");
const heading6=document.querySelector(".heading6");
const heading7=document.querySelector(".heading7");


// callback hell 
// setTimeout(()=>{
//     heading1.textContent="Heading 1..";
//     setTimeout(()=>{
//         heading2.textContent="Heading 2";
//         setTimeout(()=>{
//             heading3.textContent="Heading 3";
//             setTimeout(()=>{
//                 heading4.textContent="Heading 4";
//                 setTimeout(()=>{
//                     heading5.textContent="Heading 5";
//                     setTimeout(()=>{
//                         heading6.textContent="Heading 6";
//                         setTimeout(()=>{
//                             heading7.textContent="Heading 7";
//                         },3000);
//                     },3000);
//                 },2000);
//             },1000);
//         },2000);
//     },2000);
// },1000);


//// Is khach se bachne k lie promisses use kie jate hain



//// Pyramid of dooom
function siraj(element, text, color, time, callback){
    setTimeout(()=>{
        if (element){
            element.textContent=text;
            element.style.color=color;
        if (callback){
            callback();
        }else{
            console.log("Function Does not exist...");
        }
        }
        else{
            console.log("Element Doesnt exists");
        }
        
    }, time)
}

siraj(heading1,"One", "red", 1000 , ()=>{
    siraj(heading2, "Two" , "green" , 1000, ()=>{
        siraj(heading3, "Three", "blue", 1000, ()=>{
            siraj(heading4,"Four", "yellow", 1000, ()=>{
                siraj(heading5, "five", "purple", 1000, ()=>{
                    siraj(heading6, "six", "pink", 1000, ()=>{
                        siraj(heading7, "Seven", "brown", 1000);
                    })
                })
            })
        })
    });
});