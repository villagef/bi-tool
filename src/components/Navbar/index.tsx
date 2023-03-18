import React, { useState } from "react";
import "components/Navbar/index.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeFilled,
  DatabaseFilled,
  DashboardFilled,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const { Sider } = Layout;

const NavbarComponent = () => {
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();
  let location = useLocation();

  return (
    <>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="flex navbar-logo-wrapper">
          {!collapsed && <div className="navbar-logo" />}
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "navbar-trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          defaultSelectedKeys={["/"]}
          items={[
            {
              key: "/",
              icon: <HomeFilled />,
              label: "Home",
              onClick: () => navigate("/"),
            },
            {
              key: "/database",
              icon: <DatabaseFilled />,
              label: "Database",
              onClick: () => navigate("/database"),
            },
            {
              key: "/dashboard",
              icon: <DashboardFilled />,
              label: "Dashboard",
              onClick: () => navigate("/dashboard"),
            },
          ]}
        />
      </Sider>
    </>
  );
};

export default NavbarComponent;
