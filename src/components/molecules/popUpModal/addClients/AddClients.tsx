import { Button, Flex, Form, Input, Modal, Space } from "antd";
import { AddNewClientDesignHOD } from "../../../../services/Services";
import { ClientsDesignHODDataProps } from "../../../../services/CommonType";

interface AddClientsProps {
  addNewClient: boolean;
  handleClientModel: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddClient = ({ addNewClient, handleClientModel }: AddClientsProps) => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const [form] = Form.useForm();

  const onFinish = async (values: ClientsDesignHODDataProps) => {
    await AddNewClientDesignHOD(values);
    handleOk();
  };
  const handleOk = () => {
    handleClientModel(false);
    form.resetFields();
  };

  const handleCancel = () => {
    handleClientModel(false);
    form.resetFields();
  };

  return (
    <Modal
      title="Add Client"
      open={addNewClient}
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
          name="client_name"
          label="Client Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="contact_email"
          label="Contact Email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="contact_person"
          label="Contact Person"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="client_address"
          label="Client Address"
          rules={[{ required: true }]}
        >
          <Input.TextArea showCount />
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

export default AddClient;
