
const f1=new Promise((a,b)=>
    {
    setTimeout(()=>{ 
           
            a("f1 promise success")
        },10000)
    })
const f2=new Promise((a,b)=>
        {
        setTimeout(()=>{ 
            b("f1 promise failed")
               // a("f2 promise success")
            },4000)
        })
 const f3=new Promise((a)=>
            {
            setTimeout(()=>{ 
                    a("f3 promise success")
                },1000)
            })
        
    // f1.then(r=>console.log(r))
    // f2.then(r=>console.log(r))
    // f3.then(r=>console.log(r))

   // Promise.all([f1,f2,f3]).then(r=>console.log(r)).catch(e=>console.log(e)) // all promise should be passed else failed
  // Promise.any([f1,f2,f3]).then(r=>console.log(r)).catch(e=>console.log(e))  // any of the promise should be passed
   // Promise.allSettled([f1,f2,f3]).then(r=>console.log(r)).catch(e=>console.log(e)) // all promise executed and return all status
   Promise.race([f1,f2,f3]).then(r=>console.log(r)).catch(e=>console.log(e)) // return first promise whether passed or failed