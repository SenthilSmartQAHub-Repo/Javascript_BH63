// Object Types
// object – Represents any non-primitive value.
// Arrays (T[] / Array<T>) – Represents a collection of elements of type T.
// Tuples ([T1, T2]) – Fixed-size array with specific types for each index.
// Enum – Defines a set of named constants.

let Emp1:object={
    empSalary:1000,
    empAge:25,
    empId:'ABC101'
}

let Emp2:any={
    empSalary:1000,
    empAge:25,
    empId:'ABC101'
}

//Inline object type
let Emp3:{empSalary:number,empAge:number,empId:string}={
    empSalary:10000,
    empAge:25,
    empId:'ABC101'
}


//type Alias
type EmpType={empSalary:number,empAge:number,empId:string}

let Emp4:EmpType={
    empSalary:10000,
    empAge:25,
    empId:'ABC101'
}

// Arrays (T[] / Array<T>) – Represents a collection of elements of type T

let values1:any[]=[10,30,40,50,"welcome"]

let values2:Array<any>=[10,30,40,50,true,"welcome"]


// Tuples ([T1, T2, T3...etc]) – Fixed-size array with specific types for each index.

let values3:[number,string,boolean]=[10,"welcome",true]


// Enum – Defines a set of named constants.

enum Direction{
    ArrawUp,
    ArrawDown,
    ArrawLeft,
    ArrawRight,
}

console.log(Direction.ArrawRight)

enum Status
{
    Success=200,
    NotFound=404,
    ServerError=500
}
console.log(Status.Success)

enum Color
{
    Red="RED",
    green="GREEN",
    blue="BLUE"
}

console.log(Color.green)