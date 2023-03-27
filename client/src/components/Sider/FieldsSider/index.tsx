import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import "./index.css";
import SidebarItem from "./siderElement";

const FieldsSider = () => {
  const [open, setOpen] = useState(true);
  const columns_mock = [
    "Desk",
    "Commodity",
    "Trader Name",
    "Trader Email",
    "Quantity",
  ];
  return (
    <Sider
      collapsible
      reverseArrow={false}
      collapsed={open}
      theme="light"
      className="properties-sider"
      collapsedWidth={20}
      onCollapse={() => setOpen((prev) => !prev)}
    >
      <h1>Fields</h1>
      {columns_mock.map((field) => (
        <SidebarItem key={field} name={field} />
      ))}
    </Sider>
  );
};

export default FieldsSider;
