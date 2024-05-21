/// First of all creating an object using xmlHTTPrequest  

//imp
//// STatus >> ready state >> response  >>onload>>on readystate change

const url="https://jsonplaceholder.typicode.com/posts"

const xhr= new XMLHttpRequest();
/// console.log(xhr);
//// Step 1---->open
xhr.open("get", url);

///readyState -->0 UNSENT   1 OPENED    2 HEADERS_RECEIVED     3 LOADING       4 DONE

xhr.onreadystatechange=function(){
    if (xhr.readyState===4){
        console.log(xhr.readyState);
        console.log(typeof xhr.response)//string
/// Avoid this string, use this 
        const resp=xhr.response;
        const data = JSON.parse(resp);
        console.log(typeof data);
        console.log(xhr);
    }
}/// This way is big and complex . see new way on 93

xhr.send();
