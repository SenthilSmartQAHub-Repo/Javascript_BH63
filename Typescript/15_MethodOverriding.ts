//developing same method name with single parameter and different implemention
class App1
{
   test():void
   {
    console.log("test method welcome")
   }
}
class App2 extends App1
{
    test():void
   {
    super.test()
    console.log("test method playwright")
     console.log("test method playwright")
   }
}

const objApp2=new App2()
objApp2.test()
// const objApp1=new App1()
// objApp1.test()