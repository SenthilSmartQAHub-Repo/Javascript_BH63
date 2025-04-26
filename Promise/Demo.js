async function validation()
{
return new Promise((resolve, reject)=>{
let done=false;
if(done)
{
    setTimeout(resolve, 2000,"Task finished")
}
else{
    setTimeout(reject, 2000,"Task failed")
}
})
}

//promiseobj.then(r=>console.log(r)).catch(e=>console.log(e))

async function mystatus()
{
    try{
   const a1=await validation();
  console.log(a1)
    }
    catch(error)
    {
        console.log(error)
    }

}

mystatus()





