const url="https://jsonplaceholder.typicode.com/posts"

function sendRequest(method, url){
    return new Promise(function(resolve,reject){
        const xhr=new XMLHttpRequest();
        xhr.open(method,url)
        xhr.onload=function(){
            if(xhr.status>=200 && xhr.status<300){
                resolve(xhr.response);
            } 
            else{
                reject(new Error("Something is went wrong..."));
            }
        }
        xhr.onerror=function(){
            reject(new Error("Somemthing is went wrong..."));
        }
        xhr.send();
    })
}


sendRequest("get", url)
.then(resp=>{
    const data = JSON.parse(resp);
    console.log(data);
    /// .then also returns peomise... 
    return data;
})
.then(data=>{
    console.log(data);
    const id= data[3].id;
    return id;
})
.then(id=>{
    console.log("From third then, id =",id);
    const url2=`${url}/${id}`;
    //returning value from then will be passed to next then function as argument..
    console.log(url2);

    return sendRequest("get", url2);

    
})
.then(newResp=>{
    const newData=JSON.parse(newResp);
    console.log(newData);
})
.catch(error=>{
    console.log("Something is went wrong...");
})