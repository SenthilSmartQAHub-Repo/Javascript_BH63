

//Call back function- function passed in another function as an arugment
function add()
{
    console.log(10+5)
}
function sub()
{
    console.log(10-5)
}
//Higher order function
function action(fn)
{
    console.log("Action funtion")
    fn()
}

action(sub);