import { Button, Popconfirm, Row, Space, Table } from "antd";
import Column from "antd/es/table/Column";
// import { EmployeeDetailProps } from "../../services/CommonType";
import { useState } from "react";
import AddNewEmployeeCard from "../addNewEmployeeCard/AddNewEmployeeCard";
import { EmployeeDetailProps } from "../../../services/CommonType";
import { PlusOutlined } from "@ant-design/icons";
import { deleteEmployeeDetails } from "../../../services/Services";

interface EmployeeListProps {
    listOfEmployee: EmployeeDetailProps[];
    callGetEmployees:()=> void;
  }
  
  
const EmployeeListTable = ({listOfEmployee,callGetEmployees}:EmployeeListProps) =>{
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [employeeDetails , setEmployeeDetails] = useState<EmployeeDetailProps>()
  const [isAddEmployee, setIsAddEmployee] = useState<boolean>(false)

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setEmployeeDetails(undefined)
    setIsAddEmployee(false)
    callGetEmployees()
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setEmployeeDetails(undefined)
    setIsAddEmployee(false)
  };
  
  const onClickEdit   = (record :EmployeeDetailProps) =>{
      console.log("aaaa",record)
      setIsAddEmployee(false)
      setEmployeeDetails(record)
      showModal()
      callGetEmployees()
  }

  const addNewEmployee =() =>{
    showModal()
    setIsAddEmployee(true)
  }

  const confirmDelete =(record :EmployeeDetailProps)=>{
    console.log('record',record)
    const response = deleteEmployeeDetails(record.EmployeeId)
    console.log('response',response)
    callGetEmployees()
  }


    return(
      <>
        <Row justify="end" style={{marginBottom:'15px'}}>
          <Button type="primary" onClick={addNewEmployee}><PlusOutlined />Add New Employee</Button>
        </Row>
        <Table dataSource={listOfEmployee} pagination={false}>
        
          <Column title="Employee Id" dataIndex="EmployeeId" key="EmployeeId" />
          <Column title="Employee Name" dataIndex="EmployeeName" key="EmployeeName" />
          <Column title="Employee Email" dataIndex="EmailId" key="EmployeeName" />
          <Column title="Department Name" dataIndex="DepartmentName" key="DepartmentName" />
          <Column title="Role Name" dataIndex="RoleName" key="RoleName" />
          <Column
            title="Action"
            key="action"
            render={(_: any,record :EmployeeDetailProps) => (
              <Space size="middle">
                <a onClick={() => onClickEdit(record)}>Edit </a>
                <Popconfirm
                  title="Delete the task"
                  description="Are you sure to delete this task?"
                  onConfirm={()=>confirmDelete(record)}
                  // onCancel={}
                  okText="Yes"
                  cancelText="No"
                >
                <a>Delete</a>
                </Popconfirm>
              </Space>
            )}
          />
      </Table>
      <AddNewEmployeeCard isAddEmployee={isAddEmployee} employeeDetails={employeeDetails} isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}/>
      </>
    )
}

export default EmployeeListTable