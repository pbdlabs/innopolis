import { Button, Popconfirm, Space, Spin, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import {
  GetMaterialReqDesignHODProps,
  GetMaterialReqProps,
  callApprovalAndDecline,
  getMaterialReqDesignHOD,
} from "../../../../../../services/Services";
import { LoadingOutlined } from "@ant-design/icons";

const MaterialRequest = () => {
  const [getMaterialRequestData, setMaterialRequestData] =
    useState<GetMaterialReqDesignHODProps>({ success: false, data: null });

  const [getActionStatus, setGetActionStatus] =
    useState<GetMaterialReqDesignHODProps>({ success: false, data: null });

  const getMaterialRequest = async () => {
    setMaterialRequestData(await getMaterialReqDesignHOD());
  };

  const callApprove = async (id: number) => {
    const status = "Y";
    setGetActionStatus(await callApprovalAndDecline(status, id));
  };

  const callDecline = async (id: number) => {
    const status = "N";
    setGetActionStatus(await callApprovalAndDecline(status, id));
  };

  useEffect(() => {
    getMaterialRequest();
  }, [getActionStatus]);

  const columns: ColumnsType<GetMaterialReqProps> = [
    {
      title: "Component name",
      dataIndex: "ComponentName",
      key: "ComponentName",
    },
    {
      title: "Component Type",
      dataIndex: "ComponentType",
      key: "ComponentType",
    },
    {
      title: "Employee Name",
      dataIndex: "EmployeeName",
      key: "EmployeeName",
    },
    {
      title: "Item/Type",
      dataIndex: "ItemType",
      key: "ItemType",
    },
    {
      title: "Specs",
      dataIndex: "Specs",
      key: "Specs",
    },
    {
      title: "Plant",
      dataIndex: "PlantName",
      key: "PlantName",
    },
    {
      title: "Project Name",
      key: "ProjectName",
      dataIndex: "ProjectName",
    },
    {
      title: "Project Code",
      key: "ProjectNumber",
      dataIndex: "ProjectNumber",
    },
    {
      title: "Requested By",
      key: "RequestedBy",
      dataIndex: "EmployeeName",
    },
    {
      title: "Requested Date",
      key: "RequestedDate",
      dataIndex: "RequestedDate",
    },
    {
      title: "Status",
      key: "Status",
      dataIndex: "Status",
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => callApprove(record?.req_id)}
          >
            <Button type="link">Approve</Button>
          </Popconfirm>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => callDecline(record?.req_id)}
          >
            <Button type="link">Decline</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      {getMaterialRequestData.data ? (
        <Table
          scroll={{ x: true }}
          columns={columns}
          dataSource={getMaterialRequestData.data}
          rowKey={(record) => record.req_id}
        />
      ) : (
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      )}
    </>
  );
};

export default MaterialRequest;
