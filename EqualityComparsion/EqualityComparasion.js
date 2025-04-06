//1. Loose Equality  == (only value) ==> type coercion
//2. Strict Equality === (value and type)

console.log(10=='10') // string is coered to number // true
console.log(true==1)  // boolean is corerd to number //true
console.log(null == undefined) // empty
console.log(false==0)  // boolean is corerd to number //true
console.log(null == 0) // false
console.log(10 == 'ten') //false

//Strict Equality === (No type coercion)

console.log(10==='10') //false
console.log(true===1)  // false 
console.log(null === undefined)  // false
console.log(false===0) //false
console.log(null === 0)  // false
console.log(10 === 'ten') //false