import { Button, Form, Input, Modal, Select } from "antd"
import { useEffect, useState } from "react";
import { GetComponentMaterialProps, getComponentMaterial, postSpec } from "../../../../services/design/Employee/DesignEmployeeService";
import { Option } from "antd/es/mentions";
interface AddSpecProps{
    openAddSpec: boolean
    setAddSpec: React.Dispatch<React.SetStateAction<boolean>>
}

const AddSpec =({openAddSpec, setAddSpec}:AddSpecProps)=>{
    const [form] = Form.useForm();
    const [ specList, specListType] = useState<GetComponentMaterialProps>({
      success : false,
      data: null
  })

    const callConfirm =async(value:any) =>{
        await postSpec(value.component, value.spec)
        form.resetFields();
        setAddSpec(false)
    }

    const handleCancel =()=>{
        form.resetFields();
        setAddSpec(false)
    }

    const callComponent = async() =>{
      specListType(await getComponentMaterial())
      console.log("componentType",specList)
    }

    useEffect(()=>{
        callComponent()
    },[])

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
    return(
        <Modal
        title="Add spec"
        open={openAddSpec}
        onOk={callConfirm}
        onCancel={handleCancel}
        footer={null}
        >
        <Form
            {...layout}
            form={form}
            name="addSpec"
            onFinish={callConfirm}
            style={{ maxWidth: 600 }}
            // validateMessages={validateMessages}
        >
            <Form.Item
            name="component"
            label="Component"
            rules={[{ required: true }]}
            >
           <Select placeholder="Component">
            {specList.data !== null &&
              specList?.data.map((element) => {
                return (
                  <Option
                    key={element?.component_id?.toString()}
                    value={element?.component_id?.toString()}
                  >
                    {element?.component_name}
                  </Option>
                );
              })}
          </Select>
        </Form.Item>
        <Form.Item
        name="spec"
        label="Spec"
        rules={[{ required: true }]}
        >
            <Input style={{width:'200px'}}/>
        </Form.Item>
        <Button type="primary" htmlType="submit">submit</Button>
        </Form>
        
    </Modal>
    )
}

export default AddSpec