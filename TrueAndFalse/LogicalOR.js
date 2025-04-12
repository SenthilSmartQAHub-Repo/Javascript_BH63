
//falsy values-  false, 0, null, undefined, NAN,""

  console.log(""||"Arun")
  console.log("Arun"||false)
  console.log(null||undefined||25)
  console.log(null||undefined)
  console.log(undefined||null)


let username=userName() || "Guest"


  if(username)
{
   console.log("Login")
}

  function userName()
  {
    return ""
  }