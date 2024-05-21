const khan=document.querySelector("button")
const body = document.body;
const col=document.querySelector(".curr");

function randomColorGenerator(){
    const red= Math.floor(Math.random()*256);
    const green= Math.floor(Math.random()*256);
    const blue= Math.floor(Math.random()*256);
    return `rgb(${red},${green},${blue})`;
}

khan.addEventListener("click", (e)=>{
    const randomColor2=randomColorGenerator();
    body.style.backgroundColor=randomColor2;
    col.textContent=randomColor2;
})
// 7:18