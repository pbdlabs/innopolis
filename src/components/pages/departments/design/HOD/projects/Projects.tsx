import { Button, Row, Space, Table } from "antd"
import type { ColumnsType } from 'antd/es/table';
import AddNewProjects from "../../../../../molecules/addNewProjects/AddNewProjects";
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


const Projects = () =>{
  const [addNewProject, setNewProject] = useState<boolean>(false)
    const columns: ColumnsType<DataType> = [
        {
          title: 'Project code',
          dataIndex: 'ProjectCode',
          key: 'ProjectCode',
        },
        {
          title: 'Project name',
          dataIndex: 'ProjectName',
          key: 'ProjectName',
        },
        {
          title: 'Plant',
          dataIndex: 'Plant',
          key: 'Plant',
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
            <Row justify="end" style={{marginBottom:'15px'}}>
              <Button type='primary' onClick={()=>setNewProject(true)} >Add Project</Button>
            </Row>
            <Table columns={columns} dataSource={data} />
            <AddNewProjects addNewProject={addNewProject} handleNewProject={setNewProject}/>
        </>
    )
}

export default Projects