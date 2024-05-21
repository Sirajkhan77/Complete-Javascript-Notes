const url="https://jsonplaceholder.typicode.com/posts"
const xhr= new XMLHttpRequest()
xhr.open("get", url)
xhr.onload=()=>{
    if (xhr.status>=200 && xhr.status<300){
        const data =  JSON.parse(xhr.response);
        console.log(data);
        const id=data[9].id;
        console.log(id);
    }else{
        console.log("Error! 404 Not found");
    }
}

/// If no internet
xhr.onerror= () => {
    console.log("No internet connection");
}
xhr.send()


////1:35