
// Javascript Object

//Object is a collection of properties it is having key-value pair

//Create the object

//object literal
var student={
    myName:'doe',
    studentrollnumner:123,
    isPassed:true
}

//creating instance of object
var emp=new Object()
emp.empsalary=1000;
console.log(emp)


//Extracting the object
   //1  . dot opreator
   //2. [] Bracket Notation
console.log(student.studentrollnumner)
console.log(student.myName)
console.log(student.isPassed)

console.log(student['studentrollnumner'])
console.log(student['myName'])
console.log(student['isPassed'])


//space, hypens or starts with a number
const HR=
{
    'is Hired': true,
    '1address':"trichy"
}

console.log(HR["s Hired"])
console.log(HR["1address"])


//number properties
const color={

    4:'blue',
    2:45
}
console.log(color[101])
console.log(color[2])


//Iterating the values

//using for in 
for(let key in color)
{
    console.log(color[key])

}

//Object Method
//=============
 // Object.keys()
 // Object.values()
 // Object.entries()

 console.log(Object.keys(student))
 console.log(Object.values(student))
 console.log(Object.entries(student))

console.log(student)

//Adding the properties
student.address="chennai"

console.log(student)

//updating the property

student.studentrollnumner=456

console.log(student)

//deleting the property

delete student.isPassed

console.log(student)