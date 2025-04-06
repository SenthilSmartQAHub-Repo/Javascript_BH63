
// Set -> inbuild Object --> Unique values of any type

// Creating the set
const myset=new Set()
//store the value
myset.add(10.0)
myset.add(20)
myset.add(10)
//print the set values
console.log(myset)

// Creating the set
const myset1=new Set([10,302,20,30])
console.log(myset1)
//delete(value)
myset1.delete(302)
console.log(myset1)
//has(value)
console.log(myset1.has(10))
//size
console.log(myset1.size)
// clear 
myset1.clear();
console.log(myset1)

/*
Set methods
============
1. add method
2. delete method
3. clear method
4. has method
5. size property
*/

//iteration over set

// for of
var myset2=new Set([10,302,20,30])
for(let value of myset2)
{
    console.log(value)
}
//foreach
myset2.forEach(v=>console.log(v))

// remove duplicate values from array

//array to set
const number=[1,2,4,2,1,5]
const set1=new Set(number)  // removing duplicate
console.log(set1)

//set to array
const arr=new Array(...set1)
console.log(arr)

// Set operations;
// 1. union
// 2. Intersection
// 3. Difference

//1. union  => 1,2,3,5,6,7
const setA=new Set([1,2,3])
const setB=new Set([3,6,7])
const setC=new Set([...setA,...setB])
console.log(setC)

//2. Intersection
const intersection1=new Set([...setA].filter(v=>setB.has(v)))
console.log(intersection1)

//3.Difference  1,2,6,7
const difference=new Set([...setA].filter(v=>!setB.has(v)))
console.log(difference)