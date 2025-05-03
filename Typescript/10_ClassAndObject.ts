
class AccountNumber
{

accNo:number=10000;//Global Variable
location:string="Chennai"//Global Variable
display():void{

    console.log(this.accNo)
    console.log(this.location)
}
    
}
const obj=new AccountNumber()// Object creation
obj.display()
console.log(obj.accNo)
console.log(obj.location)


// Student-> Class
// StudentName, RollNo - properties
// display method---> display the both properties
//create the object --> display the method and properties
// change the value for properties
// call the display the method and properties