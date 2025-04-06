
// Primitive Data type -----> By default Deep copy
var age=30;

var newage=age

age=40;

console.log(age, newage)

// Non-Primitive Data type  ---> By default Shallow copy

var arr1=[10,20]
var arr2=arr1;

arr1.splice(0,0,5)

console.log(arr1,arr2)

//convert Shallow copy to deep copy

var arr1=[10,20]

//... spread operator -- extracting the individual value from array
var arr2=[...arr1];  // convert Shallow copy to deep copy

arr1.splice(0,0,5)

console.log(arr1,arr2)

