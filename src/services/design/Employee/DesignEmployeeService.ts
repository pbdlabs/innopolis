const baseUrl = "http://localhost:5001/";

export interface GetComponentTypeMaterialDataProps{ 
    type_id: number;
    component_type: string
    
}

export interface GetComponentTypeMaterialProps {
    success: boolean;
    data: GetComponentTypeMaterialDataProps[] | null;
    message?: string;
  }

export interface GetItemMaterialDataProps{ 
    item_id: number;
    item: string
    
}

export interface GetItemMaterialProps {
  success: boolean;
  data: GetItemMaterialDataProps[] | null;
  message?: string;
}

export interface GetComponentMaterialDataProps{ 
  component_id : number;
  component_name : string;
    
}
  export interface GetComponentMaterialProps {
    success: boolean;
    data: GetComponentMaterialDataProps[] | null;
    message?: string;
  }


export const postComponentTypeMaterial = async (
    component: string
  ) => {
    const apiUrl = `${baseUrl}designem/componenttype`;
  
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
            component),
      });
  
      if (response.ok) {
        return { success: true, message: "Component type added successfully " };
      } else {
        alert("Fail to add Component type")
        return { success: false, message: "Fail to add Component type" };
      }
    } catch (error) {
      return {
        success: false,
        message: `Error during adding Component type: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      };
    }
  };

  export const getComponentType =
  async (): Promise<GetComponentTypeMaterialProps> => {
    const apiUrl = `${baseUrl}designem/componenttypelist`;

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
        alert("Fail to fetch Projects Request")
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

  export const postAddItemMaterial = async (
    componentType: number, item : string
  ) => {
    const apiUrl = `${baseUrl}designem/item`;
  
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {
              type_id: componentType,
              item
            }),
      });
  
      if (response.ok) {
        return { success: true, message: "Items added successfully " };
      } else {
        alert("Fail to add Item")
        return { success: false, message: "Fail to add Item" };
      }
    } catch (error) {
      return {
        success: false,
        message: `Error during adding Item: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      };
    }
  };

  export const getItem =
  async (): Promise<GetItemMaterialProps> => {
    const apiUrl = `${baseUrl}designem/itemlist`;

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
        alert("Fail to fetch Projects Request")
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



export const postItem = async (
  item_id: number, component_name : string
) => {
  const apiUrl = `${baseUrl}designem/component`;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
          {item_id:item_id,
          component_name:component_name,}
          ),
    });

    if (response.ok) {
      return { success: true, message: "Component type added successfully " };
    } else {
      alert("Fail to add Component type")
      return { success: false, message: "Fail to add Component type" };
    }
  } catch (error) {
    return {
      success: false,
      message: `Error during adding Component type: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    };
  }
};


export const getComponentMaterial =
async (): Promise<GetComponentMaterialProps> => {
  const apiUrl = `${baseUrl}designem/componentlist`;

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
      alert("Fail to fetch Component")
      return {
        success: false,
        data: null,
        message: "Fail to fetch Component",
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

export const postSpec = async (
  component: number, specs : string
) => {
  const apiUrl = `${baseUrl}designem/specs
  `;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
          {component_id: component,
            specs,}
          ),
    });

    if (response.ok) {
      return { success: true, message: "spec type added successfully " };
    } else {
      alert("Fail to add Spec")
      return { success: false, message: "Fail to add Spec" };
    }
  } catch (error) {
    return {
      success: false,
      message: `Error during adding Spec: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    };
  }
};