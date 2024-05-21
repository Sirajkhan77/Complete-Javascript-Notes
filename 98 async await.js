const url="https://jsonplaceholder.typicode.com/posts";

// fetch(url)
// .then(response=>response.json())
// .then(data=>{console.log(data)})

// This function will automatically return a promise 

async function getPosts(){
    const resp = await fetch(url)

    if (!resp.ok){
        throw new Error("Somrthing is went wrong..");
    }

    const data = await resp.json();
    console.log(data);
    return data; // It will return original promise , not data...
}

getPosts()
.then(mydata=>{
    console.log(mydata);
})

.catch(err=>{
    console.log(err);
})