class Bank
{  
    accountNumber:number;
    accountName:string
    accountLocation:string
   
    constructor(accountNumber:number,  accountName?:string, accountLocation:string="India") //parameter
    {
        this.accountNumber=accountNumber
        this.accountName=accountName ?? "arun"
        this.accountLocation=accountLocation
    }

}

const objbank1=new Bank(343434,"paul","US") //arg value
console.log(objbank1.accountName,objbank1.accountNumber,objbank1.accountLocation)
const objbank2=new Bank(343434,"paul") 
console.log(objbank2.accountName,objbank2.accountNumber,objbank2.accountLocation)
 const objbank3=new Bank(343434) 
console.log(objbank3.accountName,objbank3.accountNumber,objbank3.accountLocation)
