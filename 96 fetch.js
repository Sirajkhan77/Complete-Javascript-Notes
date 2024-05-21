const url="https://jsonplaceholder.typicode.com/posts"

const data=fetch(url);
console.log(data);///Promise



fetch(url)
.then(response=>{
    if (response.ok){
        console.log(response);
        return response.json();
    }
    else{
        throw new Error("Something is went wrong");
    }
})

.then(data=>{
    console.log(data);
    const id= data[3].id;
    return id;
})

.then(id=>{
    console.log("From third then, id =",id);
})
.catch(err=>{
    console.log("Inside of catch");
    console.log(err);
})