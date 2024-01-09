import { Button, Layout, Menu, MenuProps, Popover, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  UserAddOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";
import NavProfilePopUp from "../../atoms/navProfilePopUp/NavProfilePopUp";
import AddNewEmployeeCard from "../popUpModal/addNewEmployeeCard/AddNewEmployeeCard";
import { getEmployeesDetails } from "../../../services/Services";

type MenuItem = Required<MenuProps>["items"][number];

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const isPathLogin = pathname === "/login";

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    children?: MenuItem[]
  ): MenuItem {
    return {
      key,
      children,
      label,
    } as MenuItem;
  }

  const getHomepage = getItem(<Link to="/">Home page</Link>, "Home page");
  const getLoginPage = getItem(
    <Link to="/login">Login page</Link>,
    "Login page"
  );

  const menuOption: MenuItem[] = [getHomepage, getLoginPage];

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items2: MenuProps["items"] = [
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  ].map((icon, index) => {
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
  });

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

  const getEmployeeDetails = async () => {
    try {
      const response = await getEmployeesDetails();

      console.log("userssss", response);

      // if (response.success && response.data) {
      //   SetUserDetailCookies(response.data)

      //   dispatch(logIn(response.data))
      //   navigate('/')

      // } else {

      //   console.log('Login fails ');

      // }
    } catch (error) {
      console.error("Login", error);
    }
  };

  const item4 = [
    {
      key: "Design team",
      icon: <UserOutlined />,
      label: `Design team`,
      subMenu: [
        {
          key: "projects",
          label: <Link to="/designDepartment/projects">Projects</Link>,
        },
        {
          key: "materialRequest",
          label: (
            <Link to="/designDepartment/materialRequest">Material Request</Link>
          ),
        },
        {
          key: "clients",
          label: <Link to="/designDepartment/Clients">Clients</Link>,
        },
      ],
    },
    {
      key: "Design department",
      icon: <LaptopOutlined />,
      label: `Design team1`,
      subMenu: [
        {
          key: "projects",
          label: <Link to="/designDepartment/employee/projects">Projects</Link>,
        },
        {
          key: "materialRequestStatus ",
          label: (
            <Link to="/designDepartment/employee/materialRequestStatus">
              Material Request Status
            </Link>
          ),
        },
        {
          key: "materialDashboard",
          label: (
            <Link to="/designDepartment/employee/materialDashboard">
              Material Dashboard
            </Link>
          ),
        },
      ],
    },
    {
      key: "Design team2",
      icon: <NotificationOutlined />,
      label: `Design team2`,
      subMenu: [],
    },
    {
      key: "Design team3",
      icon: <UserAddOutlined />,
      label: (
        <Button
          type="text"
          style={{ backgroundColor: "transparent", paddingLeft: "0px" }}
          onClick={showModal}
        >
          Onboard new employee
        </Button>
      ),
      subMenu: [],
    },
    {
      key: "Design team4",
      icon: <CustomerServiceOutlined />,
      label: (
        <Button
          type="text"
          style={{ backgroundColor: "transparent", paddingLeft: "0px" }}
          onClick={showModal}
        >
          Change password{" "}
        </Button>
      ),
      subMenu: [],
    },
    {
      key: "Design team5",
      icon: <CustomerServiceOutlined />,
      label: (
        <Link
          to="/currentEmployee"
          type="text"
          style={{ backgroundColor: "transparent", paddingLeft: "0px" }}
          onClick={getEmployeeDetails}
        >
          Change password{" "}
        </Link>
      ),
      subMenu: [],
    },
  ];

  const items3: MenuProps["items"] = item4.map((eachMenu, index) => {
    return {
      key: eachMenu.key,
      icon: eachMenu.icon,
      label: eachMenu.label,
      children: eachMenu.subMenu.map((eachSubMenu) => {
        return {
          key: eachSubMenu.key,
          label: eachSubMenu.label,
        };
      }),
    };
  });

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" />

        <Popover content={<NavProfilePopUp />}>
          {!isPathLogin && (
            <Button
              type="primary"
              style={{ marginLeft: "auto", float: "right", marginTop: "5px" }}
            >
              Profile
            </Button>
          )}
        </Popover>
      </Header>

      <Layout>
        {!isPathLogin && (
          <Sider
            width={250}
            style={{
              overflow: "auto",
              height: "100vh",
              background: colorBgContainer,
            }}
          >
            <Menu
              mode="inline"
              style={{ height: "100%", borderRight: 0 }}
              items={items3}
            />
          </Sider>
        )}

        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              overflow: "initial",
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>

      <AddNewEmployeeCard
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </Layout>
  );
};

export default Navbar;
