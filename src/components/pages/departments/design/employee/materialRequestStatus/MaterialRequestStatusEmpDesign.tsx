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
      dataIndex: "Item",
      key: "Item",
    },
    {
      title: "Spec list",
      key: "Spec_list",
      dataIndex: "Spec_list",
    },
    {
      title: "Project code",
      key: "project_code",
      dataIndex: "project_code",
    },
    {
        title: "Plant",
        key: "plant",
        dataIndex: "plant",
    },
    {
        title: "Sub system",
        key: "sub_system",
        dataIndex: "sub_system",
    },
    {
        title: "Status",
        key: "status",
        dataIndex: "status",
    },
    {
        title: "Lead time",
        key: "Lead_time",
        dataIndex: "Lead_time",
    },
    {
      title: "Requested Date",
      key: "requested_date",
      dataIndex: "requested_date",
    },
  ];


const MaterialRequestStatusEmpDesign = () =>{
    const [materialRequest, setMaterialRequest] = useState<GetMaterialRequestDesignEmpProps>({
        success:false,
        data: null
    })

    useEffect(()=>{
        getMaterialRequestEmpDesign()
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