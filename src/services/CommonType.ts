export interface EmployeeDetailProps {
  DepartmentName: string;
  EmployeeId: number;
  EmployeeName: string;
  Id: number;
  EmailId: string;
  RoleName: string;
}

export interface PassNewEmployeeProps {
  employee_name: string;
  employee_id: number;
  email_id: string;
  department: number;
  role: number;
  password: string | null;
  admin_pass?: string | null;
  id?: number;
}

export interface GetProjectsDesignHODDataProps {
  project_id: number;
  project_name: string;
  project_code: number;
  plant_name: string;
  project_lead: string;
  client_name: string;
  status: string;
  date_created: Date;
}

export interface ClientsDesignHODDataProps {
  Id: number;
  client_address: string;
  client_name: string;
  contact_email: string;
  contact_person: string;
}

export interface GetProjectsDesignHODProps {
  success: boolean;
  data: GetProjectsDesignHODDataProps[] | null;
  message?: string;
}

export interface GetProjectsDesignEmpDataProps {
  project_id: number;
  project_name: string;
  project_code: string;
  plant_name: string;
  project_lead: string;
  client_name: string;
  status: string;
  date_create: string;
}

export interface GetProjectsDesignEmpProps {
  success: boolean;
  data: GetProjectsDesignEmpDataProps[] | null;
  message?: string;
}

export interface EditProjectDesignHODProps {
  project_code: number;
  project_name: string;
  project_id:number;
  plant: number;
  project_lead: number;
  client: number;
  status: string;
}

export interface GetMaterialRequestDesignEmpProps {
  success: boolean;
  data: any[] | null;
  message?: string;
}

export interface GetMaterialDataDesignEmpProps{
  component_type : string
  component_name: string
  item : string
  spec_list : string
}
export interface GetMaterialDesignEmpProps {
  success: boolean;
  data: GetMaterialDataDesignEmpProps[] | null;
  message?: string;
}

export interface GetComponentTypeDataProDesignEmpProps{
  type_id: number
  ComponentType: string
}

export interface GetComponentTypeProDesignEmpProps {
  success: boolean;
  data: GetComponentTypeDataProDesignEmpProps[] | null;
  message?: string;
}

export interface GetItemDataProDesignEmpProps{
  item_id: number
  ItemType: string
}

export interface GetItemProDesignEmpProps {
  success: boolean;
  data: GetItemDataProDesignEmpProps[] | null;
  message?: string;
}

export interface GetSpecDataProDesignEmpProps{
  spec_id: number;
  Specs: string;
}
export interface GetSpecProDesignEmpProps {
  success: boolean;
  data: GetSpecDataProDesignEmpProps[] | null;
  message?: string;
}

export interface GetComponentDataProDesignEmpProps{
  component_id: number;
  ComponentName: string;  
}

export interface GetComponentProDesignEmpProps {
  success: boolean;
  data: GetComponentDataProDesignEmpProps[] | null;
  message?: string;
}

export interface AddMaterialProjectEmpDesignProps {
Component: string
Item: string
Specs: string
componentType: string

}
export interface AddMaterialConvertProjectEmpDesignProps {
  component_id: number
  item_id : number
  spec_id : number
  componentType : number
  project_id: number
  type_id:number 
  user_id : number

}