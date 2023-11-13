import { Avatar, Button, Layout, Menu, MenuProps, Modal, Popconfirm, Popover, theme } from "antd"
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout"
import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { LaptopOutlined, NotificationOutlined, UserOutlined, UserAddOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import NavProfilePopUp from "../../atoms/navProfilePopUp/NavProfilePopUp";
import AddNewEmployeeCard from "../../atoms/addNewEmployeeCard/AddNewEmployeeCard";

type MenuItem = Required<MenuProps>['items'][number];

const Navbar = () =>{
  const location = useLocation();
  const pathname = location.pathname;
  const isPathLogin = pathname === '/login';
  
  function getItem(
      label: React.ReactNode,
      key: React.Key,
      children?: MenuItem[],
    ): MenuItem {
      return {
        key,
        children,
        label,
      } as MenuItem;
    }
      
      
      const getHomepage  = getItem(<Link to="/">Home page</Link>, 'Home page')
      const getLoginPage  = getItem(<Link to="/login">Login page</Link>, 'Login page')
    
      const menuOption: MenuItem[] = [
        getHomepage,
        getLoginPage,
      ];

      const {
        token: { colorBgContainer },
      } = theme.useToken();



      const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
        (icon, index) => {
          const key = String(index + 1);
      
          return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,
      
            children: new Array(4).fill(null).map((_, j) => {
              const subKey = index * 4 + j + 1;
              return {
                key: subKey,
                label: `option${subKey}`,
              };
            }),
          };
        },
      );


      const [isModalOpen, setIsModalOpen] = useState(false);

      const showModal = () => {
        setIsModalOpen(true);
      };
    
      const handleOk = () => {
        setIsModalOpen(false);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };
    


      const item4 =[{
            key: 'Design team',
            icon: <UserOutlined/>,
            label: `Design team`,
          },
          {
            key: 'Design team1',
            icon: <LaptopOutlined/>,
            label: `Design team1`,
          },
          {
            key: 'Design team2',
            icon: <NotificationOutlined/>,
            label: `Design team2`,
          },
          {
            key: 'Design team3',
            icon: <UserAddOutlined />,
            label: <Button type="text" style={{backgroundColor:'transparent', paddingLeft:'0px'}} onClick={showModal}>Onboard new employee</Button>,
          },
          {
            key: 'Design team4',
            icon: <CustomerServiceOutlined/>,
            label: <Button type="text" style={{backgroundColor:'transparent', paddingLeft:'0px'}} onClick={showModal }>Change password </Button>,
          }
        ]
    
    

      const items3: MenuProps['items'] = item4.map(
        (eachMenu, index) => {
      
          return {
            key: eachMenu.key,
            icon: eachMenu.icon,
            label: eachMenu.label,
      
            children: new Array(4).fill(null).map((_, j) => {
              const subKey = index * 4 + j + 1;
              return {
                key: subKey,
                label: `option${subKey}`,
              };
            }),
          };
        },
      );


    return(
        <Layout style={{height:'100vh'}}>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" />
        
        
         <Popover content={<NavProfilePopUp/>} >
         {!isPathLogin &&<Button type="primary" style={{marginLeft:'auto', float: "right", marginTop: "5px" }}>Profile</Button>}
        </Popover>
              
         
      </Header>

      <Layout>

      {!isPathLogin && <Sider width={250} style={{ background: colorBgContainer }}>

          <Menu
            mode="inline"
            style={{ height: '100%', borderRight: 0 }}
            items={items3}
          />

        </Sider>}

        <Layout style={{ padding: '0 24px 24px' }}>
        <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet/>
          </Content>
        </Layout>
        </Layout>
        
          <AddNewEmployeeCard isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}/>

        </Layout>
    )
}

export default Navbar