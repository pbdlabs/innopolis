import { Button, Row, Space, Spin, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import AddNewProjects from "../../../../../molecules/popUpModal/addNewProjects/AddNewProjects";
import { useEffect, useState } from "react";
import {
  GetProjectsDesignHODDataProps,
  GetProjectsDesignHODProps,
} from "../../../../../../services/CommonType";
import { getProjectsDesignHOD } from "../../../../../../services/Services";
import { LoadingOutlined } from "@ant-design/icons";
import EditProjectDetails from "../../../../../molecules/popUpModal/editProjectDetails/EditProjectDetails";

const Projects = () => {
  const [addNewProject, setNewProject] = useState<boolean>(false);
  const [editProject, setEditProject] = useState<boolean>(false);
  const [projectData, setProjectData] = useState<GetProjectsDesignHODProps>({
    success: false,
    data: null,
  });
  const [editProjectData, setEditProjectData] =
    useState<GetProjectsDesignHODDataProps | null>(null);

  const columns: ColumnsType<GetProjectsDesignHODDataProps> = [
    {
      title: "Project code",
      dataIndex: "project_code",
      key: "ProjectCode",
    },
    {
      title: "Project name",
      dataIndex: "project_name",
      key: "ProjectName",
    },
    {
      title: "Plant",
      dataIndex: "plant_name",
      key: "Plant",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "Status",
    },
    {
      title: "Project lead",
      dataIndex: "project_lead",
      key: "ProjectLead",
    },
    {
      title: "Client",
      dataIndex: "client_name",
      key: "Client",
    },
    {
      title: "Created Date",
      dataIndex: "date_created",
      key: "CreatedDate",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" onClick={() => callEditProject(record)}>
            Edit
          </Button>
        </Space>
      ),
    },
  ];

  const callProjectData = async () => {
    setProjectData(await getProjectsDesignHOD());
  };

  const callEditProject = (value: GetProjectsDesignHODDataProps) => {
    setEditProject(true);
    setEditProjectData(value);
  };

  useEffect(() => {
    callProjectData();
  }, [addNewProject,editProject]);

  return (
    <>
      <Row justify="end" style={{ marginBottom: "15px" }}>
        <Button type="primary" onClick={() => setNewProject(true)}>
          Add Project
        </Button>
      </Row>
      {projectData?.data ? (
        <Table
          columns={columns}
          scroll={{ x: true }}
          dataSource={projectData?.data}
          rowKey={(record) => record.project_id}
        />
      ) : (
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      )}
      {addNewProject && (
        <AddNewProjects
          addNewProject={addNewProject}
          handleNewProject={setNewProject}
        />
      )}

      {editProject && editProjectData && (
        <EditProjectDetails
          editProjectData={editProjectData}
          editProject={editProject}
          handelModalOpen={setEditProject}
        />
      )}
    </>
  );
};

export default Projects;
