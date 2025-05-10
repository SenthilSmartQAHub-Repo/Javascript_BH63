
//extends keyword

class A{
//Parent class or Base class or super class

  display1(): void 
  {
    console.log("Display1 method")
  }
}
class B extends A{

//child class or drived class or subclass 
  display2(): void 
  {
    console.log("Display2 method")
  }

}
class C extends B{

  display3(): void 
  {
    console.log("Display3 method")
  }
}


const ObjC=new C()

ObjC.display1()
ObjC.display2()
ObjC.display3()

const objB=new B();// Subclass 
objB.display1();
objB.display2()

const objA=new A();
objA.display1()