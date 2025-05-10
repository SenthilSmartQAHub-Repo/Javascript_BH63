class BasicCalc  //super class
{
    add():void{
    console.log("add operation")
    }
     sub():void{
          console.log("sub operation")
    }
    div():void{
          console.log("div operation")
    }
    mul():void{
          console.log("mul operation")
    }
}
class programmerCalc extends BasicCalc  
{   //subclass
    
     hex():void{
    console.log("hex operation")
    }
    dec():void{
    console.log("dec operation")
    }
     oct():void{
    console.log("oct operation")
    }
      Bin():void{
    console.log("Bin operation")
    }
}

const obj1=new programmerCalc()

obj1.Bin()
obj1.add()
obj1.dec()
obj1.div()
obj1.hex()
obj1.mul()
obj1.oct()
obj1.sub()


//Type of Inheritance
//====================
//Single Inheritance 
//Multilevel Inheritance
//Hierarchical Inheritance

//Note: //Mulitple Inhertance