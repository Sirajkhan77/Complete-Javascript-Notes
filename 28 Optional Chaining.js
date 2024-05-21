  /// Optional Chaining.......
  const user ={
    name:"siraj",
    address: {houseNumber:55},
  }

  console.log(user.name);
  console.log(user.address.houseNumber);
  console.log(user.address2);/// Undefined
//   console.log(user.address2.hNo);// Undefined access is error 
// Sometime data got missed , So in this  case , it would give an error .. We have to make surethat it should not give any error also in this case.. We can do thiss

///    USE    ?.

console.log(user?.address2?.hNo);// Undefined ... No error 


// ? first of all ? will check if it exists or not. If it exist it will proceed further. Else it will stop at there and return undefined 
