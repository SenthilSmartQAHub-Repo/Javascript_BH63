// 6. Type Aliases & Interfaces
// Type Alias (type) – Defines a custom type for reuse.
// Interface (interface) – Defines a contract for object structure.

//Type Alias (type) – Defines a custom type for reuse.
//type Alias
type EmployeeType={empSalary:number,empAge:number,empId:string}

// Interface (interface) – Defines a contract for object structure.

interface EmployeeType1
{
    empSalary:number,empAge:number,empId:string
}

let Emp6:EmployeeType1={
    empSalary:10000,
    empAge:25,
    empId:'ABC101'
}
