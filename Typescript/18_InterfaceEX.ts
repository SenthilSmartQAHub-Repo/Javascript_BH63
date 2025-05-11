
interface Emp12
{
    myName:String
    displaySalary():void;
}
interface Emp14
{
  
    display1():void;
}
class Emp13 implements Emp12,Emp14
{
  myName: String="sdfsdf";

  displaySalary():void
  {
    console.log("10000")
    console.log(this.myName)
  }  
display1():void
{
    
}
    
}