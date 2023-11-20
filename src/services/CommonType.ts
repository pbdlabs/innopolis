export interface EmployeeDetailProps {
    DepartmentName : string,
    EmployeeId : number ,
    EmployeeName : string, 
    Id : number,
    EmailId: string,
    RoleName : string,
} 

export interface  PassNewEmployeeProps{ 
    employee_name: string ,
    employee_id: number,
    email_id: string,
    department: number,
    role: number,
    password: string | null,
    admin_pass?:string | null, 
    id?:number,
}
