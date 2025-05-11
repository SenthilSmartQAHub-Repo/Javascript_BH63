
class Developer
{
     private isCodeReady:boolean=true
     #isDeployed:boolean=false
}

const objDeveloper=new Developer();

console.log((objDeveloper as any).isCodeReady)
