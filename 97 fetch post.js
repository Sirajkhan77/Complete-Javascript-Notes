fetch("https://jsonplaceholder.typicode.com/posts", {
    method:'post',
    body:JSON.stringify({
        title:"Siraj",
        body:"khan",
        id:1056,
    }),
    headers:{
        'Content-type': 'application/json',
    },
})
.then(resp=>{
    console.log(resp);
    return resp.json();
})
.then(data=>{
    console.log(data);
})