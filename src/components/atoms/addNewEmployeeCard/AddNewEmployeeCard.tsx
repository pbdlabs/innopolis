import { Button, Form, Input, Modal, Select } from 'antd';
import { Option } from 'antd/es/mentions';
import { EmployeeDetailProps, PassNewEmployeeProps } from '../../../services/CommonType';
import { useEffect, useState } from 'react';
import { passNewEmployee, patchEmployeeDetails } from '../../../services/Services';

interface AddNewEmployeeCardProps{
    employeeDetails?: EmployeeDetailProps;
    isAddEmployee?: boolean;
    isModalOpen: boolean;
    handleOk: () => void;
    handleCancel: () => void;

  };

const AddNewEmployeeCard = ({isAddEmployee,employeeDetails,isModalOpen,handleOk,handleCancel}:AddNewEmployeeCardProps)=>{
  const [changePassword,setChangePassword]= useState<boolean>(false)
  const [form] = Form.useForm();
  
  const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
  
  const onFinish =async (values: any) => {
    console.log(values);
    const getValues  =await form.getFieldsValue()
    const employeeInfo : PassNewEmployeeProps = {
      employee_name: getValues.EmployeeName ,
      employee_id: getValues.EmployeeId,
      email_id: getValues.EmailId,
      department: Number(getValues.DepartmentName),
      role: Number(getValues.RoleName),
      password: getValues.password || null, 
    } 

    const editEmployeeInfo = {...employeeInfo,admin_pass:getValues.adminPassword || null , id :Number(employeeDetails?.Id)}
    console.log("onfinish", editEmployeeInfo)
    console.log("onfinishHook", form.getFieldsValue())
    
    const response = isAddEmployee && await passNewEmployee(employeeInfo)
    const responseEditEmployee = !isAddEmployee && patchEmployeeDetails(editEmployeeInfo)

    console.log("onfinish", responseEditEmployee)
    handleOk()

  };
  
  useEffect(()=>{
    console.log('asdsda',employeeDetails)
    employeeDetails && form.setFieldsValue(employeeDetails);
    
  },[employeeDetails])

  useEffect(()=>{
    !employeeDetails && form.resetFields();
    setChangePassword(false)
  },[handleOk,handleCancel])

  
    return(
        <Modal title={isAddEmployee?"Onboard New Employee": "Change Employee details"} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Form
            {...layout}
            form={form}
            name="employeeDetails"
            onFinish={onFinish}
            style={{ maxWidth: 600 }}
            // validateMessages={validateMessages}
          >
            <Form.Item name="EmployeeId" label="Employee ID" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="EmployeeName" label="Employee Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="EmailId" label="Employee Email" rules={[{type:'email', required: true }]}>
              <Input />
            </Form.Item>
            {/* <Form.Item name="DepartmentName" label="Department Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item> */}
            <Form.Item name="DepartmentName" label="Department Name" rules={[{ required: true }]}>
              <Select
                placeholder="Select Department"
              >
                <Option value="1">Design</Option>
                <Option value="2">Purchase</Option>
                <Option value="3">Finance</Option>
                
              </Select>
             </Form.Item> 
            <Form.Item name="RoleName" label="Role Name" rules={[{ required: true }]}>
              <Select
                placeholder="Select Role"
              >
                <Option value="2">HOD</Option>
                <Option value="3">Employee</Option>
                
              </Select>
            </Form.Item>
            {/* <Form.Item name="RoleName" label="Role Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item> */}
            {!isAddEmployee && <Form.Item >
              <Button htmlType="button" onClick={()=>setChangePassword(!changePassword)}>
                Change password
              </Button>
            </Form.Item>}
              <Form.Item
                noStyle
                shouldUpdate={changePassword || isAddEmployee}
              >
                {() =>
                  changePassword || isAddEmployee? (
                    <>
                    { !isAddEmployee &&<Form.Item
                            name="adminPassword"
                            label="Admin password"
                            rules={[
                              {
                                required: true,
                                message: 'Please input your password!',
                              },
                            ]}
                            hasFeedback
                          >
                            <Input.Password />
                      </Form.Item> 
                    }

                    <Form.Item
                            name="password"
                            label="New password"
                            rules={[
                              {
                                required: true,
                                message: 'Please input your password!',
                              },
                            ]}
                            hasFeedback
                          >
                            <Input.Password />
                    </Form.Item>

                          <Form.Item
                            name="confirm"
                            label="Confirm Password"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                              {
                                required: true,
                                message: 'Please confirm your password!',
                              },
                              ({ getFieldValue }) => ({
                                validator(_, value) {
                                  if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                  }
                                  return Promise.reject(new Error('The new password that you entered do not match!'));
                                },
                              }),
                            ]}
                          >
                            <Input.Password />
                          </Form.Item>
                    </>
                  ) : null
                }
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>

            </Form>
        </Modal>
    )
}

export default AddNewEmployeeCard
