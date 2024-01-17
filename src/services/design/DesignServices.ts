import { AddMaterialConvertProjectEmpDesignProps, EditProjectDesignHODProps, GetComponentProDesignEmpProps, GetComponentTypeProDesignEmpProps, GetItemProDesignEmpProps, GetMaterialDesignEmpProps, GetMaterialRequestDesignEmpProps, GetProjectsDesignEmpProps, GetSpecProDesignEmpProps } from "../CommonType";
import { AddNewProjectDesignHODProps } from "../Services";

const baseUrl = "http://localhost:5001/";

export const EditProjectDesignHOD = async (
  editData: EditProjectDesignHODProps
) => {
  const apiUrl = `${baseUrl}designhd/project`;

  try {
    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        project_code: editData.project_code,
        project_name: editData.project_name,
        plant: editData.plant,
        project_lead: editData.project_lead,
        client: editData.client,
        status : editData.status,
        project_id : editData.project_id
      }),
    });

    if (response.ok) {
      return { success: true, message: "edit successfully " };
    } else {
      return { success: false, message: "Fail to edit" };
    }
  } catch (error) {
    return {
      success: false,
      message: `Error duringEditing new project: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    };
  }
};

export const getProjectsDesignEmp =
  async (): Promise<GetProjectsDesignEmpProps> => {
    const apiUrl = `${baseUrl}designem/projects`;

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
        return { success: true, data: data };
      } else {
        return {
          success: false,
          data: null,
          message: "Fail to fetch Projects Request",
        };
      }
    } catch (error) {
      return {
        success: false,
        data: null,
        message: `Fail to fetch Projects request: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      };
    }
  };

  export const getMaterialRequestEmpDesign =
  async (): Promise<GetMaterialRequestDesignEmpProps> => {
    const apiUrl = `${baseUrl}designem/materialReqStatus`;
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
        return {
          success: false,
          data: null,
          message: "Fail to fetch material request",
        };
      }
    } catch (error) {
      return {
        success: false,
        data: null,
        message: `Fail to fetch material request: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      };
    }
  };


  export const getMaterialEmpDesign =
  async (): Promise<GetMaterialDesignEmpProps> => {
    const apiUrl = `${baseUrl}designem/materials`;
    
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
        return {
          success: false,
          data: null,
          message: "Fail to fetch material",
        };
      }
    } catch (error) {
      return {
        success: false,
        data: null,
        message: `Fail to fetch material: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      };
    }
  };


  export const getComponentTypeProjectEmpDesign =
  async (): Promise<GetComponentTypeProDesignEmpProps> => {
    const apiUrl = `${baseUrl}designem/componenttype`;
    
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
        return {
          success: false,
          data: null,
          message: "Fail to fetch component type",
        };
      }
    } catch (error) {
      return {
        success: false,
        data: null,
        message: `Fail to fetch component type: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      };
    }
  };
  
  export const getItemProjectEmpDesign =
  async (item : number): Promise<GetItemProDesignEmpProps> => {
    const apiUrl = `${baseUrl}designem/item?type_id=${item}`;
  
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
        return {
          success: false,
          data: null,
          message: "Fail to fetch Item",
        };
      }
    } catch (error) {
      return {
        success: false,
        data: null,
        message: `Fail to fetch Item: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      };
    }
  };

  export const getComponentProjectEmpDesign =
  async (item : number): Promise<GetComponentProDesignEmpProps> => {
    const apiUrl = `${baseUrl}designem/component?item_id=${item}`;
  
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
        return {
          success: false,
          data: null,
          message: "Fail to fetch component",
        };
      }
    } catch (error) {
      return {
        success: false,
        data: null,
        message: `Fail to fetch component: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      };
    }
  };
  export const getSpecProjectEmpDesign =
  async (item : number): Promise<GetSpecProDesignEmpProps> => {
    const apiUrl = `${baseUrl}designem/specs?component_id=${item}`;
  
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
        return {
          success: false,
          data: null,
          message: "Fail to fetch spec",
        };
      }
    } catch (error) {
      return {
        success: false,
        data: null,
        message: `Fail to fetch spec: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      };
    }
  };

  export const getAddMaterialProjectEmpDesign = async (
    newMaterialData: AddMaterialConvertProjectEmpDesignProps
  ) => {
    const apiUrl = `${baseUrl}designem/materialreq`;
  
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          newMaterialData),
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


