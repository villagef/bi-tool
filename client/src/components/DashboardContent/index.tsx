import { useEffect, useLayoutEffect, useState } from "react";
import { Layout, Responsive, WidthProvider } from "react-grid-layout";
import _ from "lodash";
import ContentBox from "components/ContentBox";
import "./index.css";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

type ItemCallback = (
  layout: Layout[],
  oldItem: Layout,
  newItem: Layout,
  placeholder: Layout,
  e: MouseEvent,
  element: HTMLElement
) => void;

const DashboardContent = () => {
  const [layouts, setLayouts] = useState<Layout[]>([
    {
      i: "a",
      x: 0,
      y: 0,
      w: 192,
      h: 20,
      minW: 12,
      minH: 8,
      isBounded: true,
      isDraggable: true,
    },
    {
      i: "b",
      x: 0,
      y: 0,
      w: 192,
      h: 20,
      minW: 12,
      minH: 8,
      isBounded: true,
      isDraggable: true,
    },
    {
      i: "c",
      x: 0,
      y: 0,
      w: 192,
      h: 20,
      minW: 12,
      minH: 8,
      isBounded: true,
      isDraggable: true,
    },
  ]);

  const onDragStop = (
    layout: Layout[],
    oldItem: Layout,
    newItem: Layout,
    placeholder: Layout,
    e: MouseEvent,
    element: HTMLElement
  ): ItemCallback => {
    // console.log(layout, oldItem, newItem, placeholder);
    return;
  };

  return (
    <ContentBox>
      <div className="h-full w-full bg-[#f7fbff] p-2.5 shadow">
        <ResponsiveReactGridLayout
          style={{
            height: "100%",
            width: "100%",
            maxHeight: "100%",
            maxWidth: "100%",
            overflow: "hidden",
          }}
          rowHeight={5}
          containerPadding={[0, 0]}
          breakpoints={{ lg: 100 }}
          cols={{ lg: 192 }}
          onDragStop={onDragStop}
          layouts={{ lg: layouts }}
          measureBeforeMount={true}
          useCSSTransforms={true}
          compactType={null}
          preventCollision={true}
          isDroppable={true}
          // droppingItem={{ i: "xx", h: 2, w: 2 }}
        >
          {layouts.map((itm) => (
            <div
              key={itm.i}
              data-grid={itm}
              className="flex max-w-full items-center justify-center bg-gray-light"
            >
              {itm.i}
            </div>
          ))}
        </ResponsiveReactGridLayout>
      </div>
    </ContentBox>
  );
};

export default DashboardContent;
