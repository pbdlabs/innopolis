import { Avatar, Button, Popconfirm, Space, Typography } from "antd"
import {UserOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { GetUserDetailCookies, RemoveUserDetailCookies } from "../../../cookies/HandleCookies";

const NavProfilePopUp =() =>{
    const navigate = useNavigate();
    const { Title } = Typography;

    const confirm = () => {
        RemoveUserDetailCookies()
        
        // RemoveUserDetailCookies()
        navigate("/login");
      };

    // const userDetails  = useAppSelector((state)=>state.authReducer.value)
    const userDetails = GetUserDetailCookies()


    return(
        <Space direction="vertical" size={16} style={{minWidth:'250px'}}>
        <Space wrap size={16} align="center">
            <Avatar size={64} style={{ backgroundColor: '#87d068',marginRight:'20px' }} icon={<UserOutlined />} />
            <Space.Compact direction="vertical">
                <Title level={4} style={{ margin: 0 }} >{userDetails?.name}</Title>
                <Title level={4} style={{ margin: 0 }}>{userDetails?.department}</Title>
                <Title level={4} style={{ margin: 0 }}>{userDetails?.role}</Title>
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