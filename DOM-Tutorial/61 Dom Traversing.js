//////  basically the prev html documentation is in the form of a tree shown in 59 image , So that we have some methods by using which we can traverse through this tree .




/// 1). Check root node 
const rootNode= document.getRootNode();
console.log(rootNode);
/// 2). Child of this root node
console.log(rootNode.childNodes);
/// 3). Child nodes of HTML
const HTMLChilds=rootNode.childNodes[0];
console.log(HTMLChilds.childNodes);


const head1= HTMLChilds.childNodes[0];
const text1 = HTMLChilds.childNodes[3];
const body1= HTMLChilds.childNodes[2];

console.log(head1);
console.log(body1);
console.log(text1);


//// Parent node 


console.log(head1.parentNode);

////   Sibling relation ship

console.log(head1.nextSibling);