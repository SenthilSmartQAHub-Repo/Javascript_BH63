
// Abstract class

abstract class Emp23
{

   abstract displaySalary():void //Abstract method
   displayAddress():void   //concrete method
   {
     console.log("chennai")
   }

}
class Emp34 extends Emp23
{

    displaySalary(): void {
           console.log("100000")
    }
    
}
const objEmp34=new Emp34()
objEmp34.displaySalary()