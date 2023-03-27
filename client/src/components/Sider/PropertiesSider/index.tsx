import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { useDrop } from "react-dnd";
import "./index.css";

const PropertiesSider = () => {
  const [open, setOpen] = useState(true);
  const [, drop] = useDrop(() => ({
    accept: "sidebarItem",
    drop: (element: any) => ({ name: element.name }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

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
      <div
        ref={drop}
        className="properties-sider-content-wrapper"
        style={{ width: "100%", height: "100%", background: "#fbbc04" }}
      >
        content box
      </div>
    </Sider>
  );
};

export default PropertiesSider;
