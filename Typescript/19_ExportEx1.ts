
//indivial export
/*
export const t1=10;
export function display()
{
     console.log("display method")
}
export class Application1
{
     applicationNumber=10;
     displayAppNo():number
     {
      return this.applicationNumber
     }
}
*/


//export {} - Like set
/*

 const t1=10;

 function display()
{
     console.log("display method")
}
 class Application1
{
     applicationNumber=10;
     displayAppNo():number
     {
      return this.applicationNumber
     }
}
export {t1,display,Application1}

*/

//default export

const t1=10;

 function display()
{
     console.log("display method")
}
 class Application1
{
     applicationNumber=10;
     displayAppNo():number
     {
      return this.applicationNumber
     }
}

export default Application1
export {t1,display}