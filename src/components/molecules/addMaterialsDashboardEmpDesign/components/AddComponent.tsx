import { Button, Form, Input, Modal, Select } from "antd"
import { useEffect, useState } from "react";
import { GetItemMaterialProps, getItem, postItem } from "../../../../services/design/Employee/DesignEmployeeService";
import { Option } from "antd/es/mentions";

interface AddComponentProps{
    openAddComponent: boolean
    setAddComponent:React.Dispatch<React.SetStateAction<boolean>>
}
const AddComponent=({openAddComponent, setAddComponent}:AddComponentProps)=>{
    const [form] = Form.useForm();

    const [itemList, setItemList] = useState<GetItemMaterialProps>({
        success : false,
        data: null
    })

    const callConfirm =async(value:any) =>{

        console.log("componentType",value)
        await postItem(value.item, value.component)
        form.resetFields();
        setAddComponent(false)
    }

    const handleCancel =()=>{
        form.resetFields();
        setAddComponent(false)
    }
    const callComponentType = async() =>{
        setItemList(await getItem())
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
        title="Add Component"
        open={openAddComponent}
        onOk={callConfirm}
        onCancel={handleCancel}
        footer={null}
        >
        <Form
            {...layout}
            form={form}
            name="addComponent"
            onFinish={callConfirm}
            style={{ maxWidth: 600 }}
            // validateMessages={validateMessages}
        >
        <Form.Item
        name="item"
        label="Item"
        rules={[{ required: true }]}
        >
           <Select placeholder="Item">
            {itemList.data !== null &&
              itemList?.data.map((element) => {
                return (
                  <Option
                    key={element?.item_id?.toString()}
                    value={element?.item_id?.toString()}
                  >
                    {element?.item}
                  </Option>
                );
              })}
          </Select>
        </Form.Item>
        <Form.Item
        name="component"
        label="Component"
        rules={[{ required: true }]}
        >
            <Input style={{width:'200px'}}/>
        </Form.Item>
        
        <Button type="primary" htmlType="submit">submit</Button>
        </Form>
        
    </Modal>
    )
}

export default AddComponent