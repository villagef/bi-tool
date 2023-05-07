import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { useDrop } from "react-dnd";
import SidebarItem from "../FieldsSider/siderElement";
import { charts_mock } from "./mocked_data";

const PropertiesSider = () => {
  const [doppedFields, setDroppedFields] = useState<string[]>([]);
  const [open, setOpen] = useState(true);
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "sidebarItem",
    drop: (element: any) =>
      setDroppedFields((prev) => [...new Set([...prev, element.name])]),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <Sider
      collapsible
      reverseArrow={true}
      collapsed={open}
      theme="light"
      className="h-full overflow-hidden relative shadow-inner"
      collapsedWidth={20}
      onCollapse={() => setOpen((prev) => !prev)}
    >
      {!open && (
        <>
          <div className="flex items-center font-bold p-2.5 h-10 w-full text-base bg-main text-white">
            Properties
          </div>
          <div className="w-full h-auto min-h-[130px] p-2">
            <div className="font-medium text-sm text-gray">Charts</div>
            <div className="w-full h-full flex flex-wrap">
              {charts_mock.map((chart) => (
                <div
                  key={chart.id}
                  className="m-0.5 p-1.5 text-gray text-xl cursor-pointer hover:text-mainLight"
                >
                  {chart.source}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-0.5 bg-main"></div>
          <div ref={drop} className="w-full h-full absolute">
            {doppedFields.length > 0 ? (
              doppedFields?.map((field: string) => (
                <SidebarItem key={field} name={field} />
              ))
            ) : (
              <div
                className="flex justify-center items-center w-[calc(100%-20px)] h-[calc(100%-250px)]  border-[1px] border-gray border-dashed m-2.5"
                style={{
                  background: canDrop && isOver ? "#e2ebf9" : "transparent",
                  color: canDrop && isOver && "gray",
                }}
              >
                Drop fields here...
              </div>
            )}
          </div>
        </>
      )}
    </Sider>
  );
};

export default PropertiesSider;
