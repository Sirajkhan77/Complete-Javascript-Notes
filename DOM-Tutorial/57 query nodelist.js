
///  when we use QuerySelectorAll instead of getElementsBy whatever , it will create a nodelist.

const tagsAll=document.querySelectorAll("a");
console.log(tagsAll) /// Nodelist


//  Now we can use all loops here including fir each as well 

for (let i=0; i<tagsAll.length; i++){
    const y=tagsAll[i];
    y.style.backgroundColor="white";
    y.style.color="black";
    y.style.fontWeight="bold";
}



// for of loops 
for(let l of tagsAll){
    l.style.padding="0.2rem";
    l.style.marginLeft="0.5rem";
}



// easy////
tagsAll.forEach((lora)=>{
    lora.style.color="green";
})





//// hence query sselector all is little bit easy 