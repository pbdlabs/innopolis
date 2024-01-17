import { LoadingOutlined } from "@ant-design/icons"
import { Spin, Table } from "antd"
import { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { GetMaterialRequestDesignEmpProps } from "../../../../../../services/CommonType";
import { getMaterialRequestEmpDesign } from "../../../../../../services/design/DesignServices";

const columns: ColumnsType<any> = [
    {
      title: "Component name",
      dataIndex: "component_name",
      key: "component_name",
    },
    {
      title: "Component type",
      dataIndex: "component_type",
      key: "component_type",
    },
    {
      title: "Item/Type",
      dataIndex: "item",
      key: "item",
    },
    {
      title: "Spec list",
      key: "specs",
      dataIndex: "specs",
    },
    {
      title: "Project code",
      key: "project_code",
      dataIndex: "project_code",
    },
    {
        title: "Project Name",
        key: "project_name",
        dataIndex: "project_name",
    },
    {
        title: "Lead Time",
        key: "lead_time",
        dataIndex: "lead_time",
    },
    {
        title: "Status",
        key: "status",
        dataIndex: "status",
    },
  ];


const MaterialRequestStatusEmpDesign = () =>{
    const [materialRequest, setMaterialRequest] = useState<GetMaterialRequestDesignEmpProps>({
        success:false,
        data: null
    })

    const callMaterialRequest=async()=>[
      setMaterialRequest(await getMaterialRequestEmpDesign())
    ]

    useEffect(()=>{
      callMaterialRequest()
    })

    return(
        <>
        {materialRequest?.data ? (
          <>
            <Table
              scroll={{ x: true }}
              rowKey={(record) => record.project_id}
              columns={columns} 
              dataSource={materialRequest?.data}
            />
          </>
        ) : (
          <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
        )}
      </>
    )
}

export default MaterialRequestStatusEmpDesign