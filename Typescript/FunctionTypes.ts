
function addTwoNumber(a:number,b:number):number
{
  return a+b
}
let output=addTwoNumber(2,4)
console.log(output)

function concatTwoString():string
{
  return "Hello"+"Welcome"
}

function ispassedStatus():boolean{
    return true;
}

function listValues():object
{
    return [34,32]
}

function dis():null
{
    return null;
}
//mandatory parameter(a:number)
//optional parameter(x?:number)
//default parameter(b:number=10)
function display1(a:number,x?:number,b:number=10):void
{
   console.log(a,x,b)
}
display1(5,2)
