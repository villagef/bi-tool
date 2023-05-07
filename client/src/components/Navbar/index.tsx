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
        <div className="flex justify-center items-center w-full h-16">
          <div className="w-full flex items-center justify-center text-white">
            {collapsed ? (
              <div>
                <MenuUnfoldOutlined
                  className="hover:text-mainLight text-2xl"
                  onClick={() => setCollapsed(!collapsed)}
                />
              </div>
            ) : (
              <div className="w-full px-3 flex items-center justify-between">
                <p className=" text-lg">logooo</p>
                <MenuFoldOutlined
                  className="hover:text-mainLight text-2xl"
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
