import Sider from "antd/es/layout/Sider";
import { useRef, useState } from "react";
import "./index.css";
import SidebarItem from "./siderElement";
import { UpOutlined, DownOutlined } from "@ant-design/icons";

const FieldsSider = () => {
  const [open, setOpen] = useState(true);
  const scrollable = useRef(null);
  const columns_mock = [
    "Desk",
    "Commodity",
    "Trader Name",
    "Trader Email",
    "Quantity",
  ];

  const scrollIt = (toBottom: boolean) => {
    const lenght = toBottom ? -60 : 60;
    scrollable.current.scrollTop = scrollable.current.scrollTop + lenght;
  };

  return (
    <Sider
      collapsible
      reverseArrow={true}
      collapsed={open}
      theme="light"
      className="fields-sider"
      collapsedWidth={20}
      onCollapse={() => setOpen((prev) => !prev)}
    >
      {!open && (
        <>
          <div className="fields-sider-title">Fields</div>
          <div
            id="scroll-to-top"
            className="scroll-button"
            onClick={() => scrollIt(true)}
          >
            <UpOutlined />
          </div>
          <div className="fields-wrapper" ref={scrollable}>
            {columns_mock.map((field) => (
              <SidebarItem key={field} name={field} />
            ))}
          </div>
          <div
            id="scroll-to-bottom"
            className="scroll-button"
            onClick={() => scrollIt(false)}
          >
            <DownOutlined />
          </div>
        </>
      )}
    </Sider>
  );
};

export default FieldsSider;
