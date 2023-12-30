import { Button, Row, Table } from "antd"
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    key: number;
    ClientName: string;
    ClientAddress: string;
    ContactPerson: string;
    ContactEmail: string;
  }

const Clients = () =>{
    const columns: ColumnsType<DataType> = [
        {
          title: 'Client Name',
          dataIndex: 'ClientName',
          key: 'ClientName',
        },
        {
          title: 'Client Address',
          dataIndex: 'ClientAddress',
          key: 'ClientAddress',
        },
        {
          title: 'Contact Person',
          dataIndex: 'ContactPerson',
          key: 'ContactPerson',
        },
        {
          title: 'Contact Email',
          key: 'ContactEmail',
          dataIndex: 'ContactEmail',
        },
      ];

      
      const data: DataType[] = [
        {key:1, ClientName: 'abc', ClientAddress : 'abc', ContactPerson: 'abc', ContactEmail: 'abc@nomail.co'}, 
        {key:2, ClientName: 'def', ClientAddress : 'def', ContactPerson: 'def', ContactEmail: 'def@nomail.com'},
        {key:3, ClientName: 'abc', ClientAddress : 'abc', ContactPerson: 'abc', ContactEmail: 'abc@nomail.co'}, 
        {key:4, ClientName: 'def', ClientAddress : 'def', ContactPerson: 'def', ContactEmail: 'def@nomail.com'},

      ];
    return(
        <>
            <Row justify="end" style={{marginBottom:'15px'}}>
              <Button type='primary' onClick={()=>console.log("addButton")} >Add Client</Button>
            </Row>
            <Table columns={columns} dataSource={data} />
        </>
    )
}

export default Clients