import { useState } from "react";
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
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth={50}
      >
        <div className="flex h-16 w-full items-center justify-center">
          <div className="flex w-full items-center justify-center text-white">
            {collapsed ? (
              <div>
                <MenuUnfoldOutlined
                  className="text-2xl hover:text-mainLight"
                  onClick={() => setCollapsed(!collapsed)}
                />
              </div>
            ) : (
              <div className="flex w-full items-center justify-between px-3">
                <p className=" text-lg">logooo</p>
                <MenuFoldOutlined
                  className="text-2xl hover:text-mainLight"
                  onClick={() => setCollapsed(!collapsed)}
                />
              </div>
            )}
          </div>
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
