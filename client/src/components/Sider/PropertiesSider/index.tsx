import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { useDrop } from "react-dnd";
import "./index.css";
import {
  AndroidFilled,
  AppleFilled,
  WindowsFilled,
  YoutubeFilled,
  BugFilled,
  FrownFilled,
  TrophyFilled,
} from "@ant-design/icons";
import SidebarItem from "../FieldsSider/siderElement";

const PropertiesSider = () => {
  const [doppedFields, setDroppedFields] = useState<string[]>([]);
  const [open, setOpen] = useState(true);
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "sidebarItem",
    drop: (element: any) => setDroppedFields((prev) => [...prev, element.name]),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;

  const charts_mock = [
    {
      id: "bar_graph_chart",
      name: "Bar Graph",
      source: <AndroidFilled />,
    },
    {
      id: "pie_chart",
      name: "Pie Chart",
      source: <AppleFilled />,
    },
    {
      id: "bar_graph_charts",
      name: "Bar Graph",
      source: <WindowsFilled />,
    },
    {
      id: "bar_graph_chartaadsd",
      name: "Bar Graph",
      source: <YoutubeFilled />,
    },
    {
      id: "bar_graph_chartasdasdczx",
      name: "Bar Graph",
      source: <BugFilled />,
    },
    {
      id: "bar_graph_chartzxc",
      name: "Bar Graph",
      source: <FrownFilled />,
    },
    {
      id: "bar_graph_charte42",
      name: "Bar Graph",
      source: <TrophyFilled />,
    },
  ];

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
            style={{ background: isActive ? "red" : "transparent" }}
          >
            {doppedFields?.map((field: string) => (
              <SidebarItem key={field} name={field} />
            ))}
          </div>
        </>
      )}
    </Sider>
  );
};

export default PropertiesSider;
