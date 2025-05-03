
class Person
{
//Global variable 
  personaddress:string="UK"//non-static variable or  instance variable
  personName:string="arun"//non-static variable or instance variable
   static readonly personnumber:number=12243// static variable
}

const objperson1=new Person()
console.log(objperson1.personName,objperson1.personaddress)

const objperson2=new Person()
objperson2.personName="vijay"
console.log(objperson2.personName,objperson2.personaddress)

console.log(Person.personnumber)
//Person.personnumber=10000
console.log(Person.personnumber)
//  instance variable-  multiple copy of data
// static variable - single copy