import { DownOutlined, LoadingOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space, Spin, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import AddMaterials from "../../../../../molecules/popUpModal/addMaterials/AddMaterials";
import { useEffect, useState } from "react";
import { getProjectsDesignEmp } from "../../../../../../services/design/DesignServices";
import {
  GetProjectsDesignEmpDataProps,
  GetProjectsDesignEmpProps,
} from "../../../../../../services/CommonType";

const ProjectsEmpDesign = () => {
  const [isModalOpen, setIsModelOpen] = useState<boolean>(false);
  const [projectDetails, setProjectDetails] =
    useState<GetProjectsDesignEmpProps>({
      success: false,
      data: null,
    });

  const [addMaterialData, setAddMaterialData] =
    useState<GetProjectsDesignEmpDataProps | null>(null);

    const callAddMaterial =async(record:GetProjectsDesignEmpDataProps) =>{
      setAddMaterialData(record)
      setIsModelOpen(true)
      console.log(record)
    }

    const columns: ColumnsType<GetProjectsDesignEmpDataProps> = [
      {
        title: "Project name",
        dataIndex: "project_name",
        key: "project_name",
      },
      {
        title: "Project code",
        dataIndex: "project_code",
        key: "project_code",
      },
      {
        title: "Plant",
        dataIndex: "plant_name",
        key: "plant_name",
      },
      {
        title: "Project lead",
        key: "project_lead",
        dataIndex: "project_lead",
      },
      {
        title: "Client",
        key: "client_name",
        dataIndex: "client_name",
      },
      {
        title: "Created Date",
        key: "date_created",
        dataIndex: "date_created",
      },
      {
        title: "Status",
        key: "status",
        dataIndex: "status",
      },
      {
        title: "Action",
        key: "action",
        render: (_, record) => (
          <Space size="middle">
            <Button type="link" onClick={() => callAddMaterial(record)}>
              Add Material
            </Button>
          </Space>
        ),
      },
    ];



  const callGetProjectDesignEmp = async () => {
    setProjectDetails(await getProjectsDesignEmp());
  };

  useEffect(() => {
    callGetProjectDesignEmp();
  }, []);

  return (
    <>
      {projectDetails?.data ? (
        <>
          <Table 
            scroll={{ x: true }}
            rowKey={(record) => record.project_id}
            columns={columns} 
            dataSource={projectDetails?.data}
          />
          {isModalOpen && addMaterialData && (
            <AddMaterials
              isModalOpen={isModalOpen}
              handleAddMaterial={setIsModelOpen}
              projectId = {addMaterialData?.project_id}
            />
          )}
        </>
      ) : (
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      )}
    </>
  );
};

export default ProjectsEmpDesign;
