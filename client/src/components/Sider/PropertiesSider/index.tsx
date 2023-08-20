import { useState } from "react";
import { useDrop } from "react-dnd";
import Sider from "antd/es/layout/Sider";
import { DoubleRightOutlined } from "@ant-design/icons";
import SidebarItem from "../FieldsSider/siderElement";
import { charts_mock } from "./mocked_data";
import ChartItem from "./chartItem";

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
      theme="light"
      className="relative h-full overflow-hidden shadow"
      collapsedWidth={32}
      trigger={null}
      onClick={() => !open && setOpen((prev) => !prev)}
    >
      {!open ? (
        <div className="flex w-full rotate-90 cursor-pointer items-center pl-2 text-lg font-semibold text-gray-dark">
          <DoubleRightOutlined className="ml-1.5 mr-3 rotate-90" />
          <p>Properties</p>
        </div>
      ) : (
        <>
          <div
            className="flex h-10 w-full cursor-pointer items-center justify-between bg-main p-2.5 text-base font-bold text-white"
            onClick={() => setOpen((prev) => !prev)}
          >
            <p>Properties</p>
            <DoubleRightOutlined />
          </div>
          <div className="h-auto min-h-[130px] w-full p-2">
            <div className="text-sm font-medium text-gray">Charts</div>
            <div className="flex h-full w-full flex-wrap">
              {charts_mock.map((chart) => (
                <ChartItem key={chart.id} data={chart} />
              ))}
            </div>
          </div>
          <div className="h-0.5 w-full bg-main"></div>
          <div ref={drop} className="absolute h-full w-full">
            {doppedFields.length > 0 ? (
              doppedFields?.map((field: string) => (
                <SidebarItem
                  key={field}
                  name={field}
                  setDroppedFields={setDroppedFields}
                />
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
