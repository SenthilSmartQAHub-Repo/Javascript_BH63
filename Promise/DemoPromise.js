

// let mypromise=new Promise(  (resolve,reject)   =>

//     {
//          let value=undefined;
//          if(!!value)
//          {
//             resolve(value +' is not null or undefined')
//          }
//          else{
//             reject(value + ' is null or undefined')
//          }
//     }
// )
// mypromise.then(result=>console.log(result)).catch(failed=>console.log(failed))



const p1=new Promise((a,b)=>
{
  let a1=50
  if(a1==5)
  {
    a("a1==5")
  }
  else if(a1==10)
  {
    a("a1==10")
  }
  else{
    b("a1 is not 5,10")
  }
  
}
)
//p1.then(r=>console.log(r)).catch(r=>console.log(r)).finally(()=>console.log("promise is executed"))

console.log(p1)
     
//===================================================

