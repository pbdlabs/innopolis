import { useEffect, useState } from "react"
import { getEmployeesDetails } from "../../../services/Services"
import { Empty } from "antd"
import EmployeeListTable from "../../molecules/employeeListTable/EmployeeListTable"
import { EmployeeDetailProps } from "../../../services/CommonType"



const EmployeeList =() =>{
    const [listOfEmployee,setListOfEmployee] = useState<EmployeeDetailProps[]>([])

    const callGetEmployees = async()=>{

        try {
            const response = await getEmployeesDetails();
            
            console.log('userssss',response)
  
            if (response.success && response.data) {
                setListOfEmployee(response.data)
              
            } else {
              
              console.log('Login fails ');
              
            }
          } catch (error) {
            
            console.error('Login',error);
          }

    }
    

    useEffect(()=>{

        callGetEmployees()

    },[])
    return(
        <>
        {listOfEmployee ?   <EmployeeListTable listOfEmployee={listOfEmployee} callGetEmployees={callGetEmployees}/> : <Empty />}
        </>
    )
}

export default EmployeeList