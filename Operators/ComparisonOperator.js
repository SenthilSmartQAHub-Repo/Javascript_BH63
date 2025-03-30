//Comparison Operators (==,===,!==,!=,>,<,>=,<=)

//== --> loose equality operator 
      //(both value should be same but type can be different --> true)
//=== --> strict equality operator
      // (both value and type should be same)

let a=10;//number
let b=10;//number
let c="10"; //String
console.log(a==c) //true
console.log(a===c) //false
console.log(a===b) //true
 
let x=5;
let y='10';
let z='50'
console.log(x!=y);//true
console.log(x!==y);//true
console.log(y!==z);//true

console.log(10>5);// true
console.log(10<4);//false
console.log(10<=10);//true
console.log(10>=10);//true