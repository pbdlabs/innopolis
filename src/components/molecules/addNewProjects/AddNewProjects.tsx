import { Button, Form, Input, Modal, Select } from "antd";
import { Option } from "antd/es/mentions";
import { useEffect, useState } from "react";
import { GetClientsSelectApiResponse, GetPlantSelectApiResponse, GetProjectLeadsSelectApiResponse, getClientsSelect, getPlantSelect, getProjectLeadsSelect } from "../../../services/Services";
import { wait } from "@testing-library/user-event/dist/utils";


interface AddNewProjectsProps {
    addNewProject: boolean;
    handleNewProject:React.Dispatch<React.SetStateAction<boolean>>
}

const AddNewProjects = ({addNewProject , handleNewProject}:AddNewProjectsProps) =>{

  const [getPlantList, setPlantList] = useState<GetPlantSelectApiResponse>({success: false, data: null})
  const [getProjectLeadsList, setProjectLeadsList] = useState<GetProjectLeadsSelectApiResponse>({success: false, data: null})
  const [getClientsList, setClientsList] = useState<GetClientsSelectApiResponse>({success: false, data: null})

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
    const [form] = Form.useForm();

    const onFinish =async (values: any) => {
        console.log(values)
        handleOk()
    }
    const handleOk = () => {
        handleNewProject(false)
        form.resetFields()
    };

    const handleCancel = () => {
        handleNewProject(false)
        form.resetFields()
    };

    const fetchAllSelectOptions = async () => {
      const plantResponse = await getPlantSelect();
      const projectLeadsResponse = await getProjectLeadsSelect()
      const clientsResponse = await getClientsSelect(); 
      setPlantList(plantResponse);
      setProjectLeadsList(projectLeadsResponse)
      setClientsList(clientsResponse)

    };
    
    
    useEffect(()=>{
      fetchAllSelectOptions()
    },[])

    return(
        <Modal title="Add Project" open={addNewProject} onOk={handleOk} onCancel={handleCancel}>
        <Form
            {...layout}
            form={form}
            name="employeeDetails"
            onFinish={onFinish}
            style={{ maxWidth: 600 }}
            // validateMessages={validateMessages}
          >
            <Form.Item name="ProjectCode" label="Project Code" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item name="ProjectName" label="ProjectName" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item name="Plant" label="Plant" rules={[{ required: true }]}>
              <Select
                placeholder="Select Plant"
              >
                {getPlantList.data !== null && getPlantList?.data.map(element => {
                  return<Option value={element.PlantName}>{element.PlantName}</Option>
                })}
                
              </Select>
             </Form.Item> 

            <Form.Item name="ProjectLead" label="Project Lead" rules={[{ required: true }]}>
              <Select
                placeholder="Select Project Lead"
              >
                 {getProjectLeadsList.data !== null && getProjectLeadsList?.data.map(element => {
                  return<Option value={element.EmployeeName}>{element.EmployeeName}</Option>
                })}
                
              </Select>
             </Form.Item> 

            <Form.Item name="Client" label="Client" rules={[{ required: true }]}>
              <Select
                placeholder="Select Client"
              >
                {getClientsList.data !== null && getClientsList?.data.map(element => {
                  return<Option value={element.ClientName}>{element.ClientName}</Option>
                })}
        
                
              </Select>
             </Form.Item> 

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>

            </Form>
      </Modal>
    )
}

export default AddNewProjects