import { Space, Spin, Table } from "antd"
import type { ColumnsType } from 'antd/es/table';
import { useEffect, useState } from "react";
import { GetMaterialReqDesignHODProps, GetMaterialReqProps, getMaterialReqDesignHOD } from "../../../../../../services/Services";
import { LoadingOutlined } from "@ant-design/icons";

interface DataType {
    key : number;
    ComponentName: string ;
    ComponentType: string ;
    Specs: string;
    ProjectName:string;
    ProjectCode: string;
    RequestedBy: string;
    Status: string;
    RequestedDate: string;
  }


const MaterialRequest =() =>{

  const [getMaterialRequestData, setMaterialRequestData] = useState<GetMaterialReqDesignHODProps>({success: false, data: null})
  // const EditStatus = () =>{

  // }

  const getMaterialRequest  =async()=>{
    const response  = await getMaterialReqDesignHOD()
    setMaterialRequestData(response)
    console.log("response", response)
  }
   
  useEffect(()=>{

    getMaterialRequest()

  },[])


    const columns: ColumnsType<GetMaterialReqProps> = [
        {
          title: 'Component name',
          dataIndex: 'ComponentName',
          key: 'ComponentName',
        },
        {
          title: 'Component Type',
          dataIndex: 'ComponentType',
          key: 'ComponentType',
        },
        {
          title: 'Employee Name',
          dataIndex: 'EmployeeName',
          key: 'EmployeeName',
        },
        {
          title: 'Item/Type',
          dataIndex: 'ItemType',
          key: 'ItemType',
        },
        {
          title: 'Specs',
          dataIndex: 'Specs',
          key: 'Specs',
        },
        {
          title: 'Plant',
          dataIndex: 'PlantName',
          key: 'PlantName',
        },
        {
          title: 'Project Name',
          key: 'ProjectName',
          dataIndex: 'ProjectName',
        },
        {
          title: 'Project Code',
          key: 'ProjectNumber',
          dataIndex: 'ProjectNumber',
        },
        {
          title: 'Requested By',
          key: 'RequestedBy',
          dataIndex: 'RequestedBy',
        },
        {
          title: 'Requested Date',
          key: 'RequestedDate',
          dataIndex: 'RequestedDate',
        },
        {
          title: 'Status',
          key: 'Status',
          dataIndex: 'Status',
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <a>Invite {record.ComponentName}</a>
              
            </Space>
          ),
        },
      ];

      
      // const data: GetMaterialReqProps[] = [
      //   {   key: 1, 
      //       ComponentName: 'Sanitary Butterfly Valve',
      //       ComponentType: 'Mechanical - Piping', 
      //       Specs: '80 mm', 
      //       ProjectName: 'abc', 
      //       ProjectCode: '124', 
      //       RequestedBy: 'Raju', 
      //       Status: 'Pending',
      //       RequestedDate: '20-11-2023'
            
      //   },
      //   {   key: 2, 
      //       ComponentName: 'Sanitary Butterfly Valve',
      //       ComponentType: 'Mechanical - Piping', 
      //       Specs: '80 mm', 
      //       ProjectName: 'abc', 
      //       ProjectCode: '124', 
      //       RequestedBy: 'Raju', 
      //       Status: 'Pending',
      //       RequestedDate: '20-11-2023'
      //   },
      //   { key: 3, 
      //       ComponentName: 'Sanitary Butterfly Valve',
      //       ComponentType: 'Mechanical - Piping', 
      //       Specs: '80 mm', 
      //       ProjectName: 'abc', 
      //       ProjectCode: '124', 
      //       RequestedBy: 'Raju', 
      //       Status: 'Pending',
      //       RequestedDate: '20-11-2023'
      //   },
      //   { key: 4, 
      //       ComponentName: 'Sanitary Butterfly Valve',
      //       ComponentType: 'Mechanical - Piping', 
      //       Specs: '80 mm', 
      //       ProjectName: 'abc', 
      //       ProjectCode: '124', 
      //       RequestedBy: 'Raju', 
      //       Status: 'Pending',
      //       RequestedDate: '20-11-2023'
      //   },
      //   { key: 5, 
      //       ComponentName: 'Sanitary Butterfly Valve',
      //       ComponentType: 'Mechanical - Piping', 
      //       Specs: '80 mm', 
      //       ProjectName: 'abc', 
      //       ProjectCode: '124', 
      //       RequestedBy: 'Raju', 
      //       Status: 'Pending',
      //       RequestedDate: '20-11-2023'
      //   },
      // ];
    return(
        <>
            {getMaterialRequestData.data? <Table columns={columns} dataSource={getMaterialRequestData.data} /> : <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />}
        </>
    )
}

export default MaterialRequest