// 4. Union & Intersection Types
// Union (|) – Allows a variable to hold multiple possible types.
// Intersection (&) – Combines multiple types into a single type.

let empId:string | number=123;

function add(a:number|string,b:number|string)
{
    console.log("add value is "+ a+b)
}

add("welcome",1)
add(1,"hello")
add(1,2)


// Intersection (&) – Combines multiple types into a single type.

//type Alias
type EmpType1={empSalary:number,empAge:number,empId:string}

type hrtype={isHired:boolean}

let office:EmpType1&hrtype={
    empSalary:10000,
    empAge:25,
    empId:'ABC101',
    isHired:true
}

