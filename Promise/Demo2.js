async function validate(){
    throw "welcome"
    // console.log("welcome")
    }
    
    async function getValidate(){
    try{
    console.log(await validate())
    }
    catch(error){
    console.log(error)
    }
    }
    
    getValidate()