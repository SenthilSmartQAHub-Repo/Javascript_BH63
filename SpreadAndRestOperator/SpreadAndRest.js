
// Spread operator(...) array--> extract the individual value from array values
// Rest Opeartor(...)  paratmeter, array Destructing --> collecting the multiple value into single new array.

var arr1=[10,20,30]
var arr2=[5,10,15]
const arr3=[...arr1,...arr2]
console.log(arr3)

//Rest operator(...)
function sum(...a)
{
    console.log(a)
}
sum(10,20,30)

