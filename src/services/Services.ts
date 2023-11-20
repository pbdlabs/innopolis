import { AuthState } from "../redux/features/AuthSlice";
import { PassNewEmployeeProps } from "./CommonType";
export interface LoginApiResponse {
    success: boolean;
    data? : AuthState;
    message?: string;
};


const baseUrl = 'http://localhost:5001/';

export const getLogin = async (email: string, password: string): Promise<LoginApiResponse> => {
    const apiUrl = `${baseUrl}api/login`;
    
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_id: email,
          password: password,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        return { success: true, data: data};
      } else {
        return { success: false, message: 'Login failed' };
      }
    } catch (error) {

      return { success: false, message: `Error during login: ${error instanceof Error ? error.message : 'Unknown error'}` };

    }
  };

export const getEmployeesDetails = async() =>{
  const apiUrl = `${baseUrl}api/user/get`;

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, data: data};
    } else {
      return { success: false, message: 'Fail to get employee list' };
    }
  } catch (error) {

    return { success: false, message: `Error to get employee list: ${error instanceof Error ? error.message : 'Unknown error'}` };

  }

}  

export const  passNewEmployee = async (employeeInfo:PassNewEmployeeProps) =>{
  const apiUrl = `${baseUrl}api/user/create`
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        employee_name: employeeInfo.employee_name ,
        employee_id: employeeInfo.employee_id,
        email_id: employeeInfo.email_id,
        department: employeeInfo.department,
        role: employeeInfo.role,
        password: employeeInfo.password, 
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('passNewEmployee',data)
      return { success: true, data: data};
    } else {
      return { success: false, message: 'Failed to onboard' };
    }
  } catch (error) {

    return { success: false, message: `Failed to onboard: ${error instanceof Error ? error.message : 'Unknown error'}` };

  }

}

export const deleteEmployeeDetails =async(employeeId : number) =>{
  const apiUrl= `${baseUrl}api/user/delete?employee_id=${employeeId}`

  try {
    const response = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, data: data};
    } else {
      return { success: false, message: 'Fail to delete employee' };
    }
  } catch (error) {

    return { success: false, message: `Error to delete employee: ${error instanceof Error ? error.message : 'Unknown error'}` };

  }

}


export const patchEmployeeDetails  = async(employeeInfo:PassNewEmployeeProps) =>{
  const apiUrl= `${baseUrl}api/user/edit`
  try {
    const response = await fetch(apiUrl, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id:employeeInfo.id,
        employee_name: employeeInfo.employee_name ,
        employee_id: employeeInfo.employee_id,
        email_id: employeeInfo.email_id,
        department: employeeInfo.department,
        role: employeeInfo.role,
        admin_pass: employeeInfo.admin_pass,
        employee_pass: employeeInfo.password, 
      }),

    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, data: data};
    } else {
      return { success: false, message: 'Fail to edit details' };
    }
  } catch (error) {

    return { success: false, message: `Error to  edit details: ${error instanceof Error ? error.message : 'Unknown error'}` };

  }
}