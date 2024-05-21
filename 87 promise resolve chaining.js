
function siraj(){
    return new Promise((x,y)=>{
        x("Siraj");
    })
}
  //Promise chaining
siraj().then(val=>{
    console.log(val);
    val+=" Younas";
    return val;
})
.then(val=>{
    console.log(val);
})

