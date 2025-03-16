
///==================2st ===========================

console.log("var--> Hoisted to top with undefined................................")
var a=10;
console.log(a)

console.log("let..Hoisted to top Not undefined....(TDZ- Temporal Dead zone)..........................")
let b=20;
console.log(b)

console.log("const..Hoisted to top Not undefined....(TDZ- Temporal Dead zone)..............................")
const c=50;
console.log(c)

///==================2nd ====var and let Re-Initalization and const canot do Re-Initalization==========================

//variable declaration and variable Initalization:
var x=10
console.log(x)  //10

//Re-Initalization
x=20//20
console.log(x) //20


//variable declaration and variable Initalization:
let x=10
console.log(x)  //10

//Re-Initalization
x=20//20
console.log(x) //20

//variable declaration and variable Initalization:
const x=10
console.log(x)  //10

//Re-Initalization
x=20;//20
console.log(x) //20

//=====3rd=====var only allowed re-declaration and let and const not allowed for re-declaration=================

// ====4th===== var---(ECMAscript1)----let and const--(ECMAscript6)

//====5th ====var->no scoped and let & const --> scoped 



