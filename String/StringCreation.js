
// primitive String

  var automation1="Playwright"
  var automation2=String("Playwright")

  console.log(typeof automation1, typeof automation2)

  // String object

  var automation3=new String("Playwright")
  var automation4=new String("Playwright")

 console.log(automation3)
  console.log(typeof automation3)

// == compare only value
// === compare values and type
  console.log(automation1 === automation2) //true
  console.log(automation1 == automation2)  //true
  console.log(automation1 == automation4)  //true


  console.log(automation3.valueOf() === automation4.valueOf()) //true
