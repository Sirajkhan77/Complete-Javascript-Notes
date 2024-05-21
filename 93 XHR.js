const url="https://jsonplaceholder.typicode.com/posts"
const xhr= new XMLHttpRequest()
xhr.open("get", url)
// Onload executr only when ready state is 4
xhr.onload=function(){
    const resp=xhr.response;
    const data=JSON.parse(resp);
    console.log(typeof data);
}
xhr.send()