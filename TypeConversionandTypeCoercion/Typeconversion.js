

// Change the type from one data to another

// 1. Typeconversion -   Explicitly convert a value from one type to another
// 2. TypeCoercion   -   Implicitly convert a value from one type to another

//Typeconversion
   /*
   1. Number
   2. String
   3. Boolean
   4. parseFloat
   5. parseInt
   */
//string to number
var str="123";
console.log(typeof str)
const num=Number(str) //Typeconversion
console.log(typeof num)
//Number to String
var num1=123;
const str1=String(num1)//Typeconversion
console.log(typeof str1)
//Boolean to String
var bool=true;
const str2=String(bool)
console.log(typeof str2)
// String to Boolean
var str3="true"
const bool1=Boolean(str3)
console.log(typeof bool1)


// String to float or integer
var strfloat="10.56"

let floatNum1=parseFloat(strfloat)
console.log(floatNum1, typeof floatNum1)

let floatNum2=parseInt(strfloat)
console.log(floatNum2, typeof floatNum2)

