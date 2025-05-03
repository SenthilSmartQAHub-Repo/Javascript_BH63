

//1. Dafault constructor
class Student{

    constructor()
    {
        console.log("Dafault constructor..........")
    }
   
}
const studentobj1=new Student()
const studentobj2=new Student()

//2. Parameterized constructor
class Emp
{
    empSalary:number;//Global variable
    empCompany:string;//Global variable

  constructor(empSalary:number,empCompany:string)
  {
     this.empSalary=empSalary
     this.empCompany=empCompany
  }

}
const empobj1=new Emp(12323,"HCL")
console.log(empobj1.empSalary)
console.log(empobj1.empCompany)

const empobj2=new Emp(23200,"CTS")
console.log(empobj2.empSalary)
console.log(empobj2.empCompany)