
var str="welcomeZ";

 // w  e   l   c  o  m  e Z
 // 0  1   2   3  4  5  6 7
// -7  -6 -5  -4 -3 -2  -1  negative index

var ch=str.charAt(1)
console.log(ch)

var ch=str.at(2)
console.log(ch)

var ch=str.at(-2)
console.log(ch)

// 97 to 122 - a to z
// 65 to 90  - A to Z
// 48 to 57  - 0 to 9

 var ch=str.charCodeAt(7)
 console.log(ch)

 var message = "abc1"

 var value=message.charCodeAt(0) // char to dec

 console.log(String.fromCharCode(value)) // dec to char


 var message1 ="abcds"
var message2="automation"
console.log(message1+message2)
console.log(message1.concat(message2))

console.log(message1.startsWith("play"))
console.log(message1.endsWith("right"))
console.log(message1.includes("laywrigh"))

console.log(message1.repeat(10))

var message ="A test L";
            //01234567  (+)
         //   87654321 (-)

console.log(message.slice(2))  //(+  index)
console.log(message.slice(2,6))
console.log(message.slice(-6,-2))  //(-  index)
console.log(message.substring(2,6)) //(+ index)

console.log(message.toLowerCase())
console.log(message.toUpperCase())

var message=" te st "
console.log(message.length)
console.log(message.trimStart())
console.log(message.trimEnd())
console.log(message.trim())

var str="hello-wo-rld-ni"
console.log(str.split("-"))

var automationtool="Selenium tool Selenium Selenium"

console.log(automationtool.replace("Selenium","cypress"))

console.log(automationtool.replaceAll("Selenium","cypress"))


var message="this is good"

console.log(message.replace(" is"," was"))