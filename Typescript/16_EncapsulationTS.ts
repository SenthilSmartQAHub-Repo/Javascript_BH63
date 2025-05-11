class BanKAccount
{
  private AccountBalance=10000; 
  //getters method
 getAccountBalance():number
 {
    return this.AccountBalance;
 }
 //setters method
setAccountBalance(ammount:number):void
{
    this.AccountBalance=ammount;
}
}
const objbank=new BanKAccount();
console.log(objbank.getAccountBalance())
objbank.setAccountBalance(20000)
console.log(objbank.getAccountBalance())