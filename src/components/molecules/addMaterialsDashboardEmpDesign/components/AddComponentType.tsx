import { Button, Form, Input, Modal } from "antd"
import { postComponentTypeMaterial } from "../../../../services/design/Employee/DesignEmployeeService";

interface AddComponentTypeProps{
    openComponentType: boolean
    setComponentType :React.Dispatch<React.SetStateAction<boolean>>
}

const AddComponentType =({openComponentType, setComponentType}:AddComponentTypeProps)=>{
    const [form] = Form.useForm();

    const callConfirm =async(value :any) =>{
        await postComponentTypeMaterial(value.componentType)
        form.resetFields();
        setComponentType(false)
    }

    const handleCancel =()=>{
        form.resetFields();
        setComponentType(false)
    }

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };

    return(
           <Modal
            title="Add Component Type"
            open={openComponentType}
            onOk={callConfirm}
            onCancel={handleCancel}
            footer={null}
            >
            <Form
                {...layout}
                form={form}
                name="addComponentType"
                onFinish={callConfirm}
                style={{ maxWidth: 600 }}
                // validateMessages={validateMessages}
            >
            <Form.Item
            name="componentType"
            label="Component Type"
            rules={[{ required: true }]}
            >
                <Input style={{width:'200px'}}/>
            </Form.Item>
            <Button type="primary" htmlType="submit">submit</Button>
            </Form>
            
        </Modal>
    )
}

export default AddComponentType