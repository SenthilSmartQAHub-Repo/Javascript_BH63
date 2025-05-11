class BanKAccount1
{
  private AccountBalance=10000; 
  //getters method
 get accountBalance():number
 {
    return this.AccountBalance;
 }
 //setters method
set changeAccountBalance(ammount:number)
{
    this.AccountBalance=ammount;
}
}
const objbank11=new BanKAccount1();
console.log(objbank11.accountBalance)
objbank11.changeAccountBalance=20000;
console.log(objbank11.accountBalance)