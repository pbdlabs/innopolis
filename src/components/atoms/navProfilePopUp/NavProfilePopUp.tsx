import { Avatar, Button, Popconfirm, Space, Typography } from "antd"
import {UserOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";


const NavProfilePopUp =() =>{
    const navigate = useNavigate();
    const { Title } = Typography;
    const confirm = () => {
        navigate("/login");
      };

    return(
        <Space direction="vertical" size={16}>
        <Space wrap size={16} align="center">
            <Avatar size={64} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            <Space.Compact direction="vertical">
                <Title level={4} style={{ margin: 0 }} >Vishnu V</Title>
                <Title level={4} style={{ margin: 0 }}>Design engineer</Title>
            </Space.Compact>
        </Space>
        <Space>
        <Popconfirm title="Sure to Logout?" onConfirm={confirm}>
            <Button type="primary" style={{ float: "right", marginTop: "15px", marginLeft: 'auto'}}>
            Logout
            </Button>
        </Popconfirm>    
        </Space>
        </Space>
    )
}

export default NavProfilePopUp