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

