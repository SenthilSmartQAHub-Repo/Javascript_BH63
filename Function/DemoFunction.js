
function displayValue()
{
    console.log("displayvalue function")
}

displayValue() // calling function
displayValue() // calling function
displayValue() // calling function

function sum(a,b) // parameter
{
    console.log(a+b)
}
sum(10,20) // Argument

//default parameter
function display1(message="hello")
{
    console.log(message)
}
display1()

//mandatory and default parameter
function greet(myname,age,country="USA")
{
  console.log(myname,age,country)
}
greet("Alice",26,null) //Alice 26 null
greet("Alice",26,undefined)//Alice 26 USA

add()
function add()
{
    console.log("add method")
}
