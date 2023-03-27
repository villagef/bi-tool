import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import "./index.css";

const FieldsSider = () => {
  const [open, setOpen] = useState(true);
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
      <ul>
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

export default FieldsSider;
