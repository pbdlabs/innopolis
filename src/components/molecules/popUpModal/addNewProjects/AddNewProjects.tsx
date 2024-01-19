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

interface AddNewProjectsProps {
  addNewProject: boolean;
  handleNewProject: React.Dispatch<React.SetStateAction<boolean>>;
}

interface OnFinishProps  {
  Client: string;
  Plant: string;
  ProjectCode: number;
  ProjectLead: string;
  ProjectName: string;
}

const AddNewProjects = ({
  addNewProject,
  handleNewProject,
}: AddNewProjectsProps) => {
  const [getPlantList, setPlantList] = useState<GetPlantSelectApiResponse>({
    success: false,
    data: null,
  });
  const [getProjectLeadsList, setProjectLeadsList] =
    useState<GetProjectLeadsSelectApiResponse>({ success: false, data: null });
  const [getClientsList, setClientsList] =
    useState<GetClientsSelectApiResponse>({ success: false, data: null });

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const [form] = Form.useForm();

  const convertStringValues = async(values: OnFinishProps) =>{
    const result : AddNewProjectDesignHODProps  = {
      client: Number(values.Client) ,
      plant: Number(values.Plant),
      project_code: Number(values.ProjectCode),
      project_lead: Number(values.ProjectLead),
      project_name: values.ProjectName,
    }
    return result
  }

  const onFinish = async (values: OnFinishProps) => {

    const convertedResponse : AddNewProjectDesignHODProps = await convertStringValues(values)

    await AddNewProjectDesignHOD(convertedResponse);
    handleOk();
  };
  const handleOk = () => {
    handleNewProject(false);
    form.resetFields();
  };

  const handleCancel = () => {
    handleNewProject(false);
    form.resetFields();
  };

  const fetchAllSelectOptions = async () => {
    const plantResponse = await getPlantSelect();
    const projectLeadsResponse = await getProjectLeadsSelect();
    const clientsResponse = await getClientsSelect();
    setPlantList(plantResponse);
    setProjectLeadsList(projectLeadsResponse);
    setClientsList(clientsResponse);
  };


  useEffect(() => {
    fetchAllSelectOptions();
  }, []);

  return (
    <Modal
      title="Add Project"
      open={addNewProject}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        {...layout}
        form={form}
        name="employeeDetails"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        // validateMessages={validateMessages}
      >
        <Form.Item
          name="ProjectCode"
          label="Project Code"
          rules={[{ type: "integer" }, { required: true }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          name="ProjectName"
          label="ProjectName"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="Plant" label="Plant" rules={[{ required: true }]}>
          <Select placeholder="Select Plant">
            {getPlantList.data !== null &&
              getPlantList?.data.map((element) => {
                return (
                  <Option key={element.Id.toString()} value={element.Id.toString()}>
                    {element.PlantName}
                  </Option>
                );
              })}
          </Select>
        </Form.Item>

        <Form.Item
          name="ProjectLead"
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

        <Form.Item name="Client" label="Client" rules={[{ required: true }]}>
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
    </Modal>
  );
};

export default AddNewProjects;
