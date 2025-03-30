
var str="aeo"  // bfp
//   012
for(var i=0;i<str.length;i++)
{
var ch=str.charCodeAt(i)
console.log(String.fromCharCode(ch+1))
}


var str="ABC"  // bfp
//   012
for(var i=0;i<str.length;i++)
{
var ch=str.charCodeAt(i)
console.log(String.fromCharCode(ch+32))
}


var message="welcome to playwright class"

console.log(message.indexOf('e'))
console.log(message.lastIndexOf('e'))



var automation12="123"

console.log(automation12.padStart(10,'*'))
console.log(automation12.padEnd(10,'*'))

// date formating 

 let day="3";

 console.log(day.padStart(2,0))

 //Masking credit card
  let cardnumber="1234567891234567";

  console.log(cardnumber.length)

  console.log(cardnumber.slice(-4).padStart(16,"*"))

  let userId="123456";
//   totaldigit =8
  console.log(userId.padStart(8,0))