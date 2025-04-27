// Special Types
// any – Disables type checking, allowing any value.
// unknown – Like any, but requires type checking before use.
// void – Used for functions that return nothing.
// null – Represents an explicitly empty value.
// undefined – Represents an uninitialized value.
// never Type – Represents a function that never returns (e.g., throws an error).




//void - used in functions and it will not return any value

function call():void
{
console.log("call function")
}

//null
let value1:null=null;

//undefined
let value2:undefined=undefined

//never-- never used in function and always throw the error
function call1():never
{
    throw new Error("still this function is not implemented")
}



//any
let num1:any="welcome"
console.log(num1.toUpperCase())

//unknown
let num2:unknown="Automation"

console.log(typeof num2)
//1. Type checking
if(typeof num2 ==='string')
{
console.log(num2.toUpperCase())
}
//2. Type Assertion( as or <> or double assertion)

let automation:unknown="playwright"

console.log((automation as  string).length) // as keyword
console.log((<string>automation).length) // Angle brackets <>

//double assertion
   let a2:number=10; // convert to string
  console.log((a2 as unknown as string).length)