//===========Synchronous=================
//code runs line by line
// The flow is predictable
console.log("A")
console.log("B")
console.log("C")


//Asynchronous
// Task can start and run in background
//the next task doesnot wait

setTimeout(()=>{
    console.log("A")

},3000)

setTimeout(()=>{
    console.log("B")

},1000)

setTimeout(()=>{
    console.log("C")

},4000)