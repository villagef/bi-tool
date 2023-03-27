import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import "./index.css";

const PropertiesSider = () => {
  const [open, setOpen] = useState(true);
  return (
    <Sider
      collapsible
      reverseArrow={false}
      collapsed={open}
      theme="dark"
      className="properties-sider"
      collapsedWidth={20}
      onCollapse={() => setOpen((prev) => !prev)}
    >
      <ul style={{ color: "#fff" }}>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
      </ul>
    </Sider>
  );
};

export default PropertiesSider;
