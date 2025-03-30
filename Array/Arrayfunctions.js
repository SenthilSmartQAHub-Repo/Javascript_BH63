
//==================  Removing the Element====================
var cars=["lykan","BMW","mini"]

console.log(cars.pop()) // remove last value and return removed value 

console.log(cars)

console.log(cars.shift()) //remove the first value and return the removed value

console.log(cars) 

//==========Adding the Element============================================
var cars=["lykan","BMW","mini"]

console.log(cars.push('Audi'))  //add at end of array and new length

console.log(cars)

console.log(cars.unshift('toyota')) //add at begining of array and new length

console.log(cars)

//=========Sorting and reversing ===============================

var car1=["lykan","audi","mini"]

console.log(car1.sort())
console.log(car1.reverse())

//number sorting

const num=[1,30,3,10,100,6,33] 
console.log(num.sort((a,b)=>a-b))  //1,3,6,10,30,33,100

//Array into string
var car1=["lykan","audi","mini"]

console.log(car1.join("-"))
console.log(car1.toString())

// combing and slicing array

var car2=["lykan","audi"]
var car3=["mini"]
console.log(car2.concat(car3))

var car4=["lykan","audi","mini","volvo"]

console.log(car4.slice(-3,-1))
console.log(car4.slice(1,3))

//removing and replacing
var car5=["lykan","audi","mini","volvo", "BMW"] // remove -"audi","mini","volvo" and add- Tesla

console.log(car5.splice(1,3,"Tesla"))// start index , total value to be revmoed, insert new value

console.log(car5)



var car6=["lykan","audi","mini","volvo", "BMW"]
console.log(car6.splice(1,0,"Tesla"))
console.log(car6)



