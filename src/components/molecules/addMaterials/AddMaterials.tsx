import { Form, Modal, Select } from "antd"
import { Option } from "antd/es/mentions"

type AddMaterialsProps = {
    isModalOpen : boolean
    handleAddMaterial:React.Dispatch<React.SetStateAction<boolean>>

}

const AddMaterials = ({isModalOpen,handleAddMaterial}:AddMaterialsProps) =>{
    const onFinish =async (values: any) => {
        console.log(values)
        handleOk()
    }
    const handleOk = () => {
        handleAddMaterial(false)
        // form.resetFields()
    };

    const handleCancel = () => {
        handleAddMaterial(false)
        // form.resetFields()
    };

    return(
        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Form
            // {...layout}
            // form={form}
            name="Add Materials"
            onFinish={onFinish}
            style={{ maxWidth: 600 }}
            // validateMessages={validateMessages}
          >

            <Form.Item name="componentType" label="Component Type" rules={[{ required: true }]}>
              <Select
                placeholder="Select Component Type"
              >
                <Option value="abc">Abc</Option>
                <Option value="asd">asd</Option>
                <Option value="zxc">zxc</Option>
                
              </Select>
             </Form.Item> 

             <Form.Item name="Item" label="Item" rules={[{ required: true }]}>
              <Select
                placeholder="Select Item"
              >
                <Option value="qqq">qqq</Option>
                <Option value="aaa">aaa</Option>
                <Option value="sss">sss</Option>
                
              </Select>
             </Form.Item> 

            <Form.Item name="Component" label="Component" rules={[{ required: true }]}>
              <Select
                placeholder="Select Component"
              >
                <Option value="rrr">rrr</Option>
                <Option value="eee">eee</Option>
                <Option value="ttt">ttt</Option>
                
              </Select>
            </Form.Item>

            <Form.Item name="Specs" label="Specs" rules={[{ required: true }]}>
              <Select
                placeholder="Select Specs"
              >
                <Option value="rrr">rrr</Option>
                <Option value="eee">eee</Option>
                <Option value="ttt">ttt</Option>
                
              </Select>
            </Form.Item>
          </Form>
        </Modal>
    )
}

export default AddMaterials