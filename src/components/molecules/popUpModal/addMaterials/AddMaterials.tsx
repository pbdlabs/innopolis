import { Button, Flex, Form, Modal, Select, Space } from "antd"
import { Option } from "antd/es/mentions"
import { useEffect, useState } from "react"
import { getAddMaterialProjectEmpDesign, getComponentProjectEmpDesign, getComponentTypeProjectEmpDesign, getItemProjectEmpDesign, getSpecProjectEmpDesign } from "../../../../services/design/DesignServices"
import { AddMaterialConvertProjectEmpDesignProps, AddMaterialProjectEmpDesignProps, GetComponentProDesignEmpProps, GetComponentTypeProDesignEmpProps, GetItemProDesignEmpProps, GetSpecProDesignEmpProps } from "../../../../services/CommonType"
import { useAppSelector } from "../../../../redux/Store"

type AddMaterialsProps = {
    isModalOpen : boolean
    projectId : number
    handleAddMaterial:React.Dispatch<React.SetStateAction<boolean>>
}

const AddMaterials = ({isModalOpen,handleAddMaterial,projectId}:AddMaterialsProps) =>{

  const [componentTypeList , setComponentTypeList] = useState<GetComponentTypeProDesignEmpProps>({
    success : false,
    data: null
  })
  const [itemList , setItemList] = useState<GetItemProDesignEmpProps>({
    success : false,
    data: null
  })
  const [componentList , setComponentList] = useState<GetComponentProDesignEmpProps>({
    success : false,
    data: null
  })
  const [specList , setSpecList] = useState<GetSpecProDesignEmpProps>({
    success : false,
    data: null
  })

  const [componentTypeValue, setComponentTypeValue] = useState<string>()
  const [itemValue, setItemValue] = useState<string>()
  const [componentValue, setComponentValue] = useState<string>()
  
  const userId  = useAppSelector((state)=>state.authReducer.value.employee_id)
  

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const [form] = Form.useForm();

    const onFinish =async (values: AddMaterialProjectEmpDesignProps) => {
      const valueConvert : AddMaterialConvertProjectEmpDesignProps ={
        component_id: Number(values.Component),
        item_id : Number(values.Item),
        spec_id : Number(values.Specs),
        componentType : Number(values.componentType),
        project_id: Number(projectId),
        type_id:Number(componentTypeValue),
        user_id : userId,
      } 

      await getAddMaterialProjectEmpDesign(valueConvert)
      handleOk()
    }
    const handleOk = () => {
        handleAddMaterial(false)
        form.resetFields()
    };

    const handleCancel = () => {
        handleAddMaterial(false)
        form.resetFields()
    };

    const callComponentType = async() =>{
      setComponentTypeList(await getComponentTypeProjectEmpDesign())
    }
    const callItem = async() =>{
      setItemList(await getItemProjectEmpDesign(Number(componentTypeValue)))
    }
    const callComponent = async() =>{
      setComponentList(await getComponentProjectEmpDesign(Number(componentTypeValue)))
    }
    const callSpec = async() =>{
      setSpecList(await getSpecProjectEmpDesign(Number(componentTypeValue)))
    }

    useEffect(()=>{
      callComponentType()
    },[])

    
    useEffect(()=>{
      componentTypeValue && componentTypeList.success && callItem()
    },[componentTypeValue])
    
    useEffect(()=>{
      itemValue && itemList.success && callComponent()
    },[itemValue])
    
    useEffect(()=>{
      componentValue && componentList.success && callSpec()
    },[componentValue])


    
    return(
        <Modal title="Add Material" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
            <Form
            {...layout}
            form={form}
            name="Add Materials"
            onFinish={onFinish}
            style={{ maxWidth: 600, marginTop:30, marginRight:20 }}
          >

          <Form.Item
            name="componentType"
            label="Component Type"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select Component Type" onChange={(value) => setComponentTypeValue(value)}>
              {componentTypeList.data !== null &&
                componentTypeList?.data.map((element) => {
                  return (
                    <Option
                      key={element.type_id.toString()}
                      value={element.type_id.toString()}
                    >
                      {element.ComponentType}
                    </Option>
                  );
                })}
            </Select>
          </Form.Item>

          <Form.Item
            name="Item"
            label="Item"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select Item" onChange={(value) => setItemValue(value)}>
              {itemList.data !== null &&
                itemList?.data.map((element) => {
                  return (
                    <Option
                      key={element.item_id.toString()}
                      value={element.item_id.toString()}
                    >
                      {element.ItemType}
                    </Option>
                  );
                })}
            </Select>
          </Form.Item>

          <Form.Item
            name="Component"
            label="Component"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select Component" onChange={(value) => setComponentValue(value)}>
              {componentList.data !== null &&
                componentList?.data.map((element) => {
                  return (
                    <Option
                      key={element.component_id.toString()}
                      value={element.component_id.toString()}
                    >
                      {element.ComponentName}
                    </Option>
                  );
                })}
            </Select>
          </Form.Item>

          <Form.Item
            name="Specs"
            label="Specs"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select Specs" >
              {specList.data !== null &&
                specList?.data.map((element) => {
                  return (
                    <Option
                      key={element.spec_id.toString()}
                      value={element.spec_id.toString()}
                    >
                      {element.Specs}
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
    )
}

export default AddMaterials