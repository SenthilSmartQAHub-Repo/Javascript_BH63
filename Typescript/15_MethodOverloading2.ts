
//developing same method name with different parameter and single implemention
class Greeting
{

    greet(name:string):string
    greet(age:number):string

    //single implementation
    greet(input:string | number):string
    {
         if(typeof input==='number')
         {
          return "age is "+ input
         }
        else{
           return "name is "+ input
        }

    }
}

const objgreet=new Greeting()
console.log(objgreet.greet(10))
console.log(objgreet.greet('alice'))




// class Logger
// {
//    log():void
//    log(message:string):void
//    log(message:string, error:string):void




// }