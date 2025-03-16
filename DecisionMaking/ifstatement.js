//============if stm==========================
let a=10;
if(a>=2)
{
    console.log(`${a} is greater than 2`)
}

//============if else stm==============================
let b=1;

if(b>2)
{
    console.log(`${b} > 2`)
}
else
{
    console.log(`${b} < 2`)
}
//============if else if stm==============================

let automation="QTP";

if(automation=="selenium")
{
    console.log( `I am leanring ${automation} tool`)
}
else if(automation=='cypress')
{
    console.log( `I am leanring ${automation} tool`)
}
else if(automation=='playwright')
{
        console.log( `I am leanring ${automation} tool`)
}
else
{
    console.log( `I am not leanring this ${automation} tool`)
}
//====Nested if statement===========================

// vote 18 and votecard 

let age=18
let hasvotercard=true;
if(age>=18)
{
    console.log(`age is greater then equal ${age } so eligible to vote `)
     if(hasvotercard)
     {
        console.log("you can vote now")
     }
}
