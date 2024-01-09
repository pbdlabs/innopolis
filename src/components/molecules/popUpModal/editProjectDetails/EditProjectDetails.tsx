import {
  Button,
  Flex,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Space,
} from "antd";
import { Option } from "antd/es/mentions";
import { useEffect, useState } from "react";
import {
  AddNewProjectDesignHOD,
  AddNewProjectDesignHODProps,
  GetClientsSelectApiResponse,
  GetPlantSelectApiResponse,
  GetProjectLeadsSelectApiResponse,
  getClientsSelect,
  getPlantSelect,
  getProjectLeadsSelect,
} from "../../../../services/Services";
import { EditProjectDesignHODProps, GetProjectsDesignHODDataProps } from "../../../../services/CommonType";
import { EditProjectDesignHOD } from "../../../../services/design/DesignServices";

interface EditProjectDetailsProps {
  editProjectData: GetProjectsDesignHODDataProps;
  editProject: boolean;
  handelModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditProjectDetails = ({
  editProjectData,
  editProject,
  handelModalOpen,
}: EditProjectDetailsProps) => {
  const [getPlantList, setPlantList] = useState<GetPlantSelectApiResponse>({
    success: false,
    data: null,
  });
  const [getProjectLeadsList, setProjectLeadsList] =
    useState<GetProjectLeadsSelectApiResponse>({ success: false, data: null });
  const [getClientsList, setClientsList] =
    useState<GetClientsSelectApiResponse>({ success: false, data: null });

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const [form] = Form.useForm();

  const convertStringValues = async(values: any) =>{

    let plantData = null;
    let projectLeadData = null;
    let clientData  = null;

    if (getPlantList?.data && !form.isFieldTouched('plant_name')) {
      plantData = getPlantList.data.find((each) => each.PlantName === values.plant_name)?.Id;
    }
    
    if (getProjectLeadsList?.data && !form.isFieldTouched('project_lead')){
      projectLeadData = getProjectLeadsList?.data.find((each) => each.EmployeeName === values.project_lead)?.Id;
    }

    if(getClientsList?.data && !form.isFieldTouched('client_name')){
      clientData = getClientsList?.data.find((each)=>each.ClientName === values.client_name)?.Id;
    }

    const plant = form.isFieldTouched('plant_name') ?  Number(values.plant_name) :   Number(plantData)
    const projectLead = form.isFieldTouched('project_lead') ?  Number(values.project_lead) :   Number(projectLeadData)
    const clientName = form.isFieldTouched('client_name') ?  Number(values.client_name) :   Number(clientData)

    const result : EditProjectDesignHODProps  = {
      client: clientName,
      plant: plant,
      project_code: Number(values.project_code),
      project_lead: projectLead,
      project_name: values.project_name,
      status: values.status,
      project_id: editProjectData.project_id
    }
    return result
  }
  
  const onFinish = async (values: any) => {
    
    console.log("converted ",values)
    const convertedResponse : EditProjectDesignHODProps = await convertStringValues(values)
    console.log("converted ",convertedResponse)
    EditProjectDesignHOD(convertedResponse)
    handleOk();
  };
  const handleOk = () => {
    handelModalOpen(false);
    form.resetFields();
  };

  const handleCancel = () => {
    handelModalOpen(false);
    form.resetFields();
  };

  const fetchAllSelectOptions = async () => {
    const plantResponse = await getPlantSelect();
    const projectLeadsResponse = await getProjectLeadsSelect();
    const clientsResponse = await getClientsSelect();
    setPlantList(plantResponse);
    setProjectLeadsList(projectLeadsResponse);
    setClientsList(clientsResponse);
    setIsLoading(false);
  };

  useEffect(() => {
    // setIsLoading(true);
    fetchAllSelectOptions();
    if (editProjectData) {
      form.setFieldsValue(editProjectData);
    }
  }, [editProjectData, form]);

  console.log("response22",editProjectData)

  return (
    <Modal
      title="Edit Project"
      open={editProject}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      {!isLoading && (
        <Form
          {...layout}
          form={form}
          name="employeeDetails"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
          initialValues={editProjectData}
          // validateMessages={validateMessages}
        >
          <Form.Item
            name="project_code"
            label="Project Code"
            rules={[{ type: "integer" }, { required: true }]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            name="project_name"
            label="ProjectName"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="plant_name"
            label="Plant"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select Plant">
              {getPlantList.data !== null &&
                getPlantList?.data.map((element) => {
                  return (
                    <Option
                      key={element.Id.toString()}
                      value={element.Id.toString()}
                    >
                      {element.PlantName}
                    </Option>
                  );
                })}
            </Select>
          </Form.Item>

          <Form.Item
            name="project_lead"
            label="Project Lead"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select Project Lead">
              {getProjectLeadsList.data !== null &&
                getProjectLeadsList?.data.map((element) => {
                  return (
                    <Option
                      key={element.Id.toString()}
                      value={element.Id.toString()}
                    >
                      {element.EmployeeName}
                    </Option>
                  );
                })}
            </Select>
          </Form.Item>

          <Form.Item
            name="client_name"
            label="Client"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select Client">
              {getClientsList.data !== null &&
                getClientsList?.data.map((element) => {
                  return (
                    <Option
                      key={element.Id.toString()}
                      value={element.Id.toString()}
                    >
                      {element.ClientName}
                    </Option>
                  );
                })}
            </Select>
          </Form.Item>

          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select status" 
              options={[{ value: 'Active', label: 'Active' }, { value: 'Closed', label: 'Closed' }]}>
            </Select>
          </Form.Item>

          <Flex justify="end">
            <Space size={14}>
              <Form.Item>
                <Button onClick={handleCancel}>Cancel</Button>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Space>
          </Flex>
        </Form>
      )}
    </Modal>
  );
};

export default EditProjectDetails;
