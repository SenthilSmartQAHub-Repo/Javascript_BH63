


// Access Modifiers
// public, private , protected

export class testing1
{

  private isPassed:boolean=true; //within class
  protected executionCount=20; //within class as well as subclass
   public automationeExecution="passed"

      display():void{
        console.log(this.isPassed)
        console.log(this.executionCount)
         console.log(this.automationeExecution)
    }

}
class testing2 extends testing1
{
    displayExecutionCount():void{
       //  console.log(this.isPassed)//error
        console.log(this.executionCount)
        console.log(this.automationeExecution)
    }
}

const objtesting1=new testing1()
//  console.log(objtesting1.isPassed)
//   console.log(objtesting1.executionCount)

console.log(objtesting1.automationeExecution)