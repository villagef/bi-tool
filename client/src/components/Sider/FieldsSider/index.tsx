import Sider from "antd/es/layout/Sider";
import { useRef, useState } from "react";
import "./index.css";
import SidebarItem from "./siderElement";
import { UpOutlined, DownOutlined } from "@ant-design/icons";

const FieldsSider = () => {
  const [open, setOpen] = useState(false);
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
      collapsed={!open}
      theme={open ? "light" : "dark"}
      className="relative h-full w-full overflow-hidden shadow"
      collapsedWidth={32}
      trigger={null}
      onClick={() => !open && setOpen((prev) => !prev)}
    >
      {!open ? (
        <div className="w-full rotate-90 cursor-pointer pl-2 text-lg font-semibold text-white">
          Fields
        </div>
      ) : (
        <>
          <div
            className="flex h-10 w-full cursor-pointer items-center bg-main p-2.5 text-base font-bold text-white"
            onClick={() => setOpen((prev) => !prev)}
          >
            Fields
          </div>
          <div
            id="scroll-to-top"
            className="absolute left-0 top-10 z-10 flex h-7 w-full cursor-pointer items-center justify-center bg-white text-lg text-gray opacity-50 hover:opacity-100"
            onClick={() => handleScroll(true)}
          >
            <UpOutlined />
          </div>
          <div
            className="absolute mx-0 my-6 h-[calc(100%-90px)] w-full overflow-y-auto scroll-smooth scrollbar-hide"
            ref={scrollable}
          >
            {columns_mock.map((field) => (
              <SidebarItem key={field} name={field} />
            ))}
          </div>
          <div
            id="scroll-to-bottom"
            className="absolute bottom-0 left-0 z-10 flex h-7 w-full cursor-pointer items-center justify-center bg-white text-lg text-gray opacity-50 hover:opacity-100"
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
