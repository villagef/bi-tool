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

  const handleScroll = (toBottom: boolean) => {
    const lenght = toBottom ? -60 : 60;
    scrollable.current.scrollTop = scrollable.current.scrollTop + lenght;
  };

  return (
    <Sider
      collapsible
      reverseArrow={true}
      collapsed={open}
      theme="light"
      className="h-full overflow-hidden relative "
      collapsedWidth={20}
      onCollapse={() => setOpen((prev) => !prev)}
    >
      {!open && (
        <>
          <div className="h-10 w-full flex items-center p-2.5 font-bold bg-main text-white ">
            Fields
          </div>
          <div
            id="scroll-to-top"
            className="absolute left-0 top-10 w-full h-7 text-gray z-10 bg-white flex items-center justify-center cursor-pointer opacity-50 text-lg hover:opacity-100"
            onClick={() => handleScroll(true)}
          >
            <UpOutlined />
          </div>
          <div
            className="h-[calc(100%-150px)] w-full my-6 mx-0 overflow-y-auto absolute scroll-smooth scrollbar-hide"
            ref={scrollable}
          >
            {columns_mock.map((field) => (
              <SidebarItem key={field} name={field} />
            ))}
          </div>
          <div
            id="scroll-to-bottom"
            className="absolute left-0 bottom-12 w-full h-7 text-gray z-10 bg-white flex items-center justify-center cursor-pointer opacity-50 text-lg hover:opacity-100"
            onClick={() => handleScroll(false)}
          >
            <DownOutlined />
          </div>
        </>
      )}
    </Sider>
  );
};

export default FieldsSider;
