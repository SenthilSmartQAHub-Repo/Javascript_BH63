
// Array Destructing --> Extract the value from array and assign into individual variable
var arr=[10,20,"playwright"]

var [a,b,c]=arr;

console.log(a, b, c)

//Skipping the Element

var arr=[10,20,"playwright"]
 
var [i,,j]=arr;

console.log(i, j)

//default values
var arr=[10,20]
 
var [i,j,k=100]=arr;

console.log(i,j,k)

//Rest operator with Destructing
//Rest operator--> collect the remining values and store into new array
var arr=[10,20,"playwright"]
 
var [a,...b]=arr;

console.log(a,b)


//Swappig the variable

let x=1;
let y=3;

[x,y]=[y,x];

console.log(x,y)
