import { Button, Row, Spin, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import {
  ClientsDesignHODProps,
  getClientDesignHOD,
} from "../../../../../../services/Services";
import { ClientsDesignHODDataProps } from "../../../../../../services/CommonType";
import { LoadingOutlined } from "@ant-design/icons";
import AddClient from "../../../../../molecules/popUpModal/addClients/AddClients";

const columns: ColumnsType<ClientsDesignHODDataProps> = [
  {
    title: "Client Name",
    dataIndex: "ClientName",
    key: "ClientName",
  },
  {
    title: "Client Address",
    dataIndex: "ClientAddress",
    key: "ClientAddress",
  },
  {
    title: "Contact Person",
    dataIndex: "ContactPerson",
    key: "ContactPerson",
  },
  {
    title: "Contact Email",
    key: "ContactEmail",
    dataIndex: "ContactEmail",
  },
];

const Clients = () => {
  const [clientsData, setClientData] = useState<ClientsDesignHODProps>({
    success: false,
    data: null,
  });

  const [addNewClient, setNewClient] = useState<boolean>(false);

  const getClientsRequest = async () => {
    setClientData(await getClientDesignHOD());
  };

  useEffect(() => {
    getClientsRequest();
  }, [addNewClient]);

  return (
    <>
      <Row justify="end" style={{ marginBottom: "15px" }}>
        <Button type="primary" onClick={() => setNewClient(true)}>
          Add Client
        </Button>
      </Row>
      {clientsData?.data ? (
        <Table
          scroll={{ x: true }}
          columns={columns}
          dataSource={clientsData?.data}
          rowKey={(record) => record.Id}
        />
      ) : (
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      )}
      {addNewClient && (
        <AddClient
          addNewClient={addNewClient}
          handleClientModel={setNewClient}
        />
      )}
    </>
  );
};

export default Clients;
