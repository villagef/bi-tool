import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { useDrop } from "react-dnd";
import SidebarItem from "../FieldsSider/siderElement";
import { charts_mock } from "./mocked_data";

const PropertiesSider = () => {
  const [doppedFields, setDroppedFields] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
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
      collapsed={!open}
      theme={open ? "light" : "dark"}
      className="relative h-full overflow-hidden shadow-inner"
      collapsedWidth={32}
      trigger={null}
      onClick={() => !open && setOpen((prev) => !prev)}
    >
      {!open ? (
        <div className="w-full rotate-90 cursor-pointer pl-2 text-lg font-semibold text-white">
          Properties
        </div>
      ) : (
        <>
          <div
            className="flex h-10 w-full cursor-pointer items-center bg-main p-2.5 text-base font-bold text-white"
            onClick={() => setOpen((prev) => !prev)}
          >
            Properties
          </div>
          <div className="h-auto min-h-[130px] w-full p-2">
            <div className="text-sm font-medium text-gray">Charts</div>
            <div className="flex h-full w-full flex-wrap">
              {charts_mock.map((chart) => (
                <div
                  key={chart.id}
                  className="m-0.5 cursor-pointer p-1.5 text-xl text-gray hover:text-mainLight"
                >
                  {chart.source}
                </div>
              ))}
            </div>
          </div>
          <div className="h-0.5 w-full bg-main"></div>
          <div ref={drop} className="absolute h-full w-full">
            {doppedFields.length > 0 ? (
              doppedFields?.map((field: string) => (
                <SidebarItem key={field} name={field} />
              ))
            ) : (
              <div
                className="m-2.5 flex h-[calc(100%-195px)] w-[calc(100%-20px)] items-center justify-center border-[1px] border-dashed border-gray"
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
