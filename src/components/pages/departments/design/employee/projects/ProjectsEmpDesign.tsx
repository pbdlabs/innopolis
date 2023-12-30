import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space, Table } from "antd"
import { ColumnsType } from "antd/es/table";
import AddMaterials from "../../../../../molecules/addMaterials/AddMaterials";
import { useState } from "react";

interface DataType {
    key: string;
    ProjectCode: number;
    ProjectName: string;
    Plant: string;
    Status: string;
    ProjectLead: string;
    Client: string;
    CreatedDate: string;
  }

const ProjectsEmpDesign = () =>{
  const [isModalOpen,setIsModelOpen] = useState<boolean>(false)
    const items = [
        { key: '1', label: 'Action 1' },
        { key: '2', label: 'Action 2' },
      ];

    const columns: ColumnsType<DataType> = [
        {
          title: 'Project name',
          dataIndex: 'ProjectName',
          key: 'ProjectName',
        },
        {
          title: 'Project code',
          dataIndex: 'ProjectCode',
          key: 'ProjectCode',
        },
        {
            title: 'Plants',
            dataIndex: 'Plants',
            key: 'Plants',
            render: () => (
              <Space size="middle">
                <Dropdown menu={{ items }}>
                  <a href=' '>
                    More <DownOutlined />
                  </a>
                </Dropdown>
              </Space>
            ),
          },
        {
          title: 'Sub system',
          dataIndex: 'SubSystem',
          key: 'SubSystem',
        },
        {
          title: 'Status',
          key: 'Status',
          dataIndex: 'Status',
        },
        {
          title: 'Project lead',
          key: 'ProjectLead',
          dataIndex: 'ProjectLead',
        },
        {
          title: 'Client',
          key: 'Client',
          dataIndex: 'Client',
        },
        {
          title: 'Created Date',
          key: 'CreatedDate',
          dataIndex: 'CreatedDate',
        },
        {
          title: 'Status',
          key: 'Status',
          dataIndex: 'Status',
        },
        {
          title: 'Action',
          key: 'Action',
          dataIndex: 'Action',
        },
        
      ];

      
      const data: DataType[] = [
        {   
            key:'1',
            ProjectCode: 24, 
            ProjectName: 'project',
             Plant: 'plant1', 
             Status: 'Inprogress', 
             ProjectLead: 'sukumaran', 
             Client: 'abc', 
             CreatedDate: '25-11-2023',
        },
        {   
            key:'2',
            ProjectCode: 12, 
            ProjectName: 'project',
             Plant: 'plant1', 
             Status: 'Inprogress', 
             ProjectLead: 'sukumaran', 
             Client: 'abc', 
             CreatedDate: '25-11-2023',
        },
        {   
            key:'3',
            ProjectCode: 1240, 
            ProjectName: 'project',
             Plant: 'plant1', 
             Status: 'Inprogress', 
             ProjectLead: 'sukumaran', 
             Client: 'abc', 
             CreatedDate: '25-11-2023',
        },
        {   
            key:'4',
            ProjectCode: 12224, 
            ProjectName: 'project',
             Plant: 'plant1', 
             Status: 'Inprogress', 
             ProjectLead: 'sukumaran', 
             Client: 'abc', 
             CreatedDate: '25-11-2023',
        },
      ];
    return(
        <>
            <Button onClick={()=>setIsModelOpen(!isModalOpen)}>Add Materials</Button>
            <Table columns={columns} dataSource={data} />
            <AddMaterials isModalOpen = {isModalOpen} handleAddMaterial={setIsModelOpen}/>

        </>
    )
}

export default ProjectsEmpDesign