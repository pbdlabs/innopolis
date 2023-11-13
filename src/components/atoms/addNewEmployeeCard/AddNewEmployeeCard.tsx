import { Button, Form, Input, InputNumber, Modal, Select } from 'antd';
import { Option } from 'antd/es/mentions';

type AddNewEmployeeCardProps = {
    isModalOpen: boolean;
    handleOk: () => void;
    handleCancel: () => void;

  };

const AddNewEmployeeCard = ({isModalOpen,handleOk,handleCancel}:AddNewEmployeeCardProps)=>{
    
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /* eslint-enable no-template-curly-in-string */
  
  const onFinish = (values: any) => {
    console.log(values);
  };

    return(
        <Modal title="Onboard New Employee" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        validateMessages={validateMessages}
      >
        <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email', required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item name={['user', 'jobRole']} label="Job roles" rules={[{ required: true }]}>
        <Select placeholder="Select Job role">
            <Option value="Zhejiang">Design Engineer</Option>
            <Option value="Jiangsu">Design Engineer2</Option>
          </Select>
        </Form.Item>

        </Form>
        </Modal>
    )
}

export default AddNewEmployeeCard
