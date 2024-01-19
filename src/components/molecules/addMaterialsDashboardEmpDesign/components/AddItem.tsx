import { Button, Modal, Form, Input, Select } from "antd"
import { useEffect, useState } from "react";
import { GetComponentTypeMaterialProps, getComponentType, postAddItemMaterial } from "../../../../services/design/Employee/DesignEmployeeService";
import { Option } from "antd/es/mentions";

interface AddItemProps{
    openAddItem: boolean
    setAddItem: React.Dispatch<React.SetStateAction<boolean>>
}

const AddItem =({openAddItem, setAddItem}:AddItemProps)=>{
    const [form] = Form.useForm();
    const [componentType, setComponentType] = useState<GetComponentTypeMaterialProps>({
        success : false,
        data: null
    })

    const callConfirm =async(value:any) =>{
        await postAddItemMaterial(value.componentType,value.item)
        form.resetFields();
        setAddItem(false)
    }

    const handleCancel =()=>{
        form.resetFields();
        setAddItem(false)
    }

    const callComponentType = async() =>{
        setComponentType(await getComponentType())
        console.log("componentType",componentType)
    }

    useEffect(()=>{
        callComponentType()
    },[])

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
    return(
        <Modal
        title="Add Item"
        open={openAddItem}
        onOk={callConfirm}
        onCancel={handleCancel}
        footer={null}
        >
        <Form
            {...layout}
            form={form}
            name="addItem"
            onFinish={callConfirm}
            style={{ maxWidth: 600 }}
            // validateMessages={validateMessages}
        >
        <Form.Item
        name="componentType"
        label="Component Type"
        rules={[{ required: true }]}
        >
           <Select placeholder="Component Type">
            {componentType.data !== null &&
              componentType?.data.map((element) => {
                return (
                  <Option
                    key={element.type_id.toString()}
                    value={element.type_id.toString()}
                  >
                    {element.component_type}
                  </Option>
                );
              })}
          </Select>
        </Form.Item>
        <Form.Item
        name="item"
        label="Item"
        rules={[{ required: true }]}
        >
            <Input style={{width:'200px'}}/>
        </Form.Item>
        <Button type="primary" htmlType="submit">submit</Button>
        </Form>
        
    </Modal>
    )
}

export default AddItem