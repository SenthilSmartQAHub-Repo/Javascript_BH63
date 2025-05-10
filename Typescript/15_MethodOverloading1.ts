
class Application
{
    concat(a:string,b:string):string
    concat(a:number,b:number):number
    concat(a:string,b:number):string
  //single implemention
  concat(a1:any,b1:any):any
  {
    return a1+b1
  }
}
const objapp=new Application();
console.log(objapp.concat("welcome","to playwright session"))
console.log(objapp.concat(10,3))
console.log(objapp.concat("hi",3))
