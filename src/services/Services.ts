import { AuthState } from "../redux/features/AuthSlice";
import {
  ClientsDesignHODDataProps,
  PassNewEmployeeProps,
  GetProjectsDesignHODProps,
} from "./CommonType";

export interface LoginApiResponse {
  success: boolean;
  data?: AuthState;
  message?: string;
}

interface getPlantSelectProps {
  Id: number;
  PlantName: string;
}

interface getProjectLeadsSelectProps {
  Id: number;
  EmployeeName: string;
}
interface getClientsSelectProps {
  Id: number;
  ClientName: string;
  ClientAddress: string;
  ContactPerson: string;
  ContactEmail: string;
}
export interface GetPlantSelectApiResponse {
  success: boolean;
  data: getPlantSelectProps[] | null;
  message?: string;
}
export interface GetProjectLeadsSelectApiResponse {
  success: boolean;
  data: getProjectLeadsSelectProps[] | null;
  message?: string;
}
export interface GetClientsSelectApiResponse {
  success: boolean;
  data: getClientsSelectProps[] | null;
  message?: string;
}

export interface GetMaterialReqProps {
  req_id: number;
  ComponentName: string;
  ComponentType: string;
  Specs: string;
  ItemType: string;
  ProjectNumber: number;
  PlantName: string;
  ProjectName: string;
  EmployeeName: string;
  RequestedDate: Date;
  Status: string;
}

export interface GetMaterialReqDesignHODProps {
  success: boolean;
  data: GetMaterialReqProps[] | null;
  message?: string;
}

export interface ClientsDesignHODProps {
  success: boolean;
  data: ClientsDesignHODDataProps[] | null;
  message?: string;
}

export interface AddNewProjectDesignHODProps {
  project_code: number;
  project_name: string;
  plant: number;
  project_lead: number;
  client: number;
}

const baseUrl = "http://localhost:5001/";

export const getLogin = async (
  email: string,
  password: string
): Promise<LoginApiResponse> => {
  const apiUrl = `${baseUrl}api/login`;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_id: email,
        password: password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, data: data };
    } else {
      return { success: false, message: "Login failed" };
    }
  } catch (error) {
    return {
      success: false,
      message: `Error during login: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    };
  }
};

export const getEmployeesDetails = async () => {
  const apiUrl = `${baseUrl}user/get`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, data: data };
    } else {
      return { success: false, message: "Fail to get employee list" };
    }
  } catch (error) {
    return {
      success: false,
      message: `Error to get employee list: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    };
  }
};

export const passNewEmployee = async (employeeInfo: PassNewEmployeeProps) => {
  const apiUrl = `${baseUrl}api/user/create`;
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        employee_name: employeeInfo.employee_name,
        employee_id: employeeInfo.employee_id,
        email_id: employeeInfo.email_id,
        department: employeeInfo.department,
        role: employeeInfo.role,
        password: employeeInfo.password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("passNewEmployee", data);
      return { success: true, data: data };
    } else {
      return { success: false, message: "Failed to onboard" };
    }
  } catch (error) {
    return {
      success: false,
      message: `Failed to onboard: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    };
  }
};

export const deleteEmployeeDetails = async (employeeId: number) => {
  const apiUrl = `${baseUrl}api/user/delete?employee_id=${employeeId}`;

  try {
    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, data: data };
    } else {
      return { success: false, message: "Fail to delete employee" };
    }
  } catch (error) {
    return {
      success: false,
      message: `Error to delete employee: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    };
  }
};

export const patchEmployeeDetails = async (
  employeeInfo: PassNewEmployeeProps
) => {
  const apiUrl = `${baseUrl}api/user/edit`;
  try {
    const response = await fetch(apiUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: employeeInfo.id,
        employee_name: employeeInfo.employee_name,
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
      return { success: true, data: data };
    } else {
      return { success: false, message: "Fail to edit details" };
    }
  } catch (error) {
    return {
      success: false,
      message: `Error to  edit details: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    };
  }
};

export const getPlantSelect = async () => {
  const apiUrl = `${baseUrl}designhd/plants`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      return { success: true, data: data } as GetPlantSelectApiResponse;
    } else {
      return {
        success: false,
        data: null,
        message: "Fail to fetch Plant List",
      } as GetPlantSelectApiResponse;
    }
  } catch (error) {
    return {
      success: false,
      data: null,
      message: `Fail to fetch Plant List: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    } as GetPlantSelectApiResponse;
  }
};

export const getProjectLeadsSelect = async () => {
  const apiUrl = `${baseUrl}designhd/designemployees`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      console.log("response", response);
      const data = await response.json();
      return { success: true, data: data } as GetProjectLeadsSelectApiResponse;
    } else {
      return {
        success: false,
        data: null,
        message: "Fail to fetch Project leads",
      } as GetProjectLeadsSelectApiResponse;
    }
  } catch (error) {
    return {
      success: false,
      data: null,
      message: `Fail to fetch Project leads: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    } as GetProjectLeadsSelectApiResponse;
  }
};

export const getClientsSelect = async () => {
  const apiUrl = `${baseUrl}designhd/clients`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      return { success: true, data: data } as GetClientsSelectApiResponse;
    } else {
      return {
        success: false,
        data: null,
        message: "Fail to fetch Clients",
      } as GetClientsSelectApiResponse;
    }
  } catch (error) {
    return {
      success: false,
      data: null,
      message: `Fail to fetch Clients: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    } as GetClientsSelectApiResponse;
  }
};

export const getMaterialReqDesignHOD = async () => {
  const apiUrl = `${baseUrl}designhd/materialreq`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      return { success: true, data: data } as GetMaterialReqDesignHODProps;
    } else {
      return {
        success: false,
        data: null,
        message: "Fail to fetch Material Request",
      } as GetMaterialReqDesignHODProps;
    }
  } catch (error) {
    return {
      success: false,
      data: null,
      message: `Fail to fetch Material request: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    } as GetMaterialReqDesignHODProps;
  }
};

export const getProjectsDesignHOD = async () => {
  const apiUrl = `${baseUrl}designhd/project`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log("data", data);
      return { success: true, data: data } as GetProjectsDesignHODProps;
    } else {
      return {
        success: false,
        data: null,
        message: "Fail to fetch Projects Request",
      } as GetProjectsDesignHODProps;
    }
  } catch (error) {
    return {
      success: false,
      data: null,
      message: `Fail to fetch Projects request: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    } as GetProjectsDesignHODProps;
  }
};

export const getClientDesignHOD = async () => {
  const apiUrl = `${baseUrl}designhd/clients`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      return { success: true, data: data } as ClientsDesignHODProps;
    } else {
      return {
        success: false,
        data: null,
        message: "Fail to fetch Projects Request",
      } as ClientsDesignHODProps;
    }
  } catch (error) {
    return {
      success: false,
      data: null,
      message: `Fail to fetch Projects request: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    } as ClientsDesignHODProps;
  }
};

export const AddNewClientDesignHOD = async (
  clientData: ClientsDesignHODDataProps
) => {
  const apiUrl = `${baseUrl}designhd/clients`;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_name: clientData.client_name,
        client_address: clientData.client_address,
        contact_person: clientData.contact_person,
        contact_email: clientData.contact_email,
      }),
    });

    if (response.ok) {
      return { success: true, message: "Client added Successfully " };
    } else {
      return { success: false, message: "Fail to Add Client" };
    }
  } catch (error) {
    return {
      success: false,
      message: `Error during adding Client: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    };
  }
};

export const AddNewProjectDesignHOD = async (
  newProjectData: AddNewProjectDesignHODProps
) => {
  const apiUrl = `${baseUrl}designhd/project`;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        project_code: newProjectData.project_code,
        project_name: newProjectData.project_name,
        plant: newProjectData.plant,
        project_lead: newProjectData.project_lead,
        client: newProjectData.client,
      }),
    });

    if (response.ok) {
      return { success: true, message: "New project added successfully " };
    } else {
      return { success: false, message: "Fail to add new project" };
    }
  } catch (error) {
    return {
      success: false,
      message: `Error during adding new project: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    };
  }
};

export const callApprovalAndDecline = async (
  status: string,
  id: number
): Promise<GetMaterialReqDesignHODProps> => {
  const apiUrl = `${baseUrl}designhd/materialreq`;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: status,
        Id: id,
      }),
    });

    if (response.ok) {
      return { success: true } as GetMaterialReqDesignHODProps;
    } else {
      return {
        success: false,
        message: "Fail to process action",
      } as GetMaterialReqDesignHODProps;
    }
  } catch (error) {
    return {
      success: false,
      message: `Fail to process action: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    } as GetMaterialReqDesignHODProps;
  }
};
