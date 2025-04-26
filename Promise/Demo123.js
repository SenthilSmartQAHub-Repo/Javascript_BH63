
async function fetchUserData(userId){
return new Promise((v,r)=>{
if (userId==456){
v("User data fetched successfully with async/await!")
}
else {
r("User data is not noy fetched successfully with async/await!")
}
})
}

async function mystatus(){

try{
const a1=await fetchUserData(456);
console.log(a1)
}
catch(error)
{
console.log(error)
}

}
mystatus()
