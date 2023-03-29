import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { useDrop } from "react-dnd";
import "./index.css";
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
      className="properties-sider"
      collapsedWidth={20}
      onCollapse={() => setOpen((prev) => !prev)}
    >
      {!open && (
        <>
          <div className="properties-sider-title">Properties</div>
          <div className="properties-sider-charts-wrapper">
            <div className="properties-sider-charts-title">Charts</div>
            <div className="properties-sider-charts">
              {charts_mock.map((chart) => (
                <div key={chart.id} className="properties-sider-chart">
                  {chart.source}
                </div>
              ))}
            </div>
          </div>
          <div className="divider"></div>
          <div
            ref={drop}
            className="properties-sider-wrapper"
            style={{ background: canDrop && isOver ? "red" : "transparent" }}
          >
            {doppedFields.length > 0 ? (
              doppedFields?.map((field: string) => (
                <SidebarItem key={field} name={field} />
              ))
            ) : (
              <div className="properties-sider-placeholder">
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
