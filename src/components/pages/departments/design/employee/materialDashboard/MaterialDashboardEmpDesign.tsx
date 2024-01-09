import { LoadingOutlined } from "@ant-design/icons"
import { Button, Popconfirm, Spin, Table } from "antd"
import { useEffect, useState } from "react";
import { GetMaterialDesignEmpProps } from "../../../../../../services/CommonType";
import { ColumnsType } from "antd/es/table";
import { getMaterialEmpDesign } from "../../../../../../services/design/DesignServices";
import AddMaterialsDashboardEmpDesign from "../../../../../molecules/addMaterialsDashboardEmpDesign/AddMaterialsDashboardEmpDesign";

const columns: ColumnsType<any> = [
    {
      title: "Component type",
      dataIndex: "Component type",
      key: "Component type",
    },
    {
      title: "Component name",
      dataIndex: "Component name",
      key: "Component name",
    },
    {
      title: "Item",
      dataIndex: "Item",
      key: "Item",
    },
    {
      title: "Spec list",
      key: "Spec list",
      dataIndex: "Spec list",
    },
  ];



const MaterialDashboardEmpDesign = () =>{
    const [materialList, setMaterialList] = useState<GetMaterialDesignEmpProps>({
        success:false,
        data: null
    })

    const callMaterialList = async() =>{
        setMaterialList(await getMaterialEmpDesign())
    }

    useEffect(()=>{
        callMaterialList()
    },[])


    return(
        <>
        <AddMaterialsDashboardEmpDesign/>
        {materialList?.data ? (
          <>
            <Table
              scroll={{ x: true }}
              rowKey={(record) => record.component_type}
              columns={columns} 
              dataSource={materialList?.data}
            />
          </>
        ) : (
          <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
        )}
      </>
    )
}

export default MaterialDashboardEmpDesign