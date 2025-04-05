
// Object - Collection of properties(key- value pair)
// key -> propertyName  and value -> propertyValue

//Creating Object

//1. Object Literal

var person={
   myName:'john',
   age:30,
   isEmployed:true
}

//2. instance of objet

const person2=new Object();
person2.brand="123"

//Accessing Object properties

   //1 . Dot Notation
   //2.  Bracket Notation-->if key is havaing special character and numberic then we use this 

   console.log(person.age)
   console.log(person["age"])

//Accessing Properties with special character

var person={
    "first-name":'john',
    age:30,
    "address 1":'123 main street, chennai'
 }

 console.log(person["first-name"])
 console.log(person["address 1"])

 //Accessing Properties with Numberic key

 const fruit={

    1:'apple',
    2:'Banana'

 }
 console.log(fruit[1])

 //Iterating over the object ( for in )

 var person={
    myName:'john',
    age:30,
    isEmployed:true
 }

 for(const key in person )
 {
    console.log(person[key])
 }
//Can;t be used
//  for(const value of person )
//     {
//        console.log(value)
//     }
   
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

for(let [i,j] of Object.entries(person))
{
    console.log(i, j)
}

//Adding and updating properties

var person={
    myName:'john',
    age:30,
    isEmployed:true
 }

 console.log(person)
 person["gender-1"]='Male' // adding the properties
 console.log(person)
 person.age=35;
 console.log(person) //Modifying the properties

 //Deleting the Perperties
 delete person.age
 console.log(person)

//Object Destructing
 var person={
    myName:'john',
    age:30,
    isEmployed:true
 }
 const{myName,age,isEmployed}=person;

 console.log(myName)

 //Checking properties

 console.log("age" in person) ;//true