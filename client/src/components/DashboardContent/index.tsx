import { useEffect, useState } from "react";
import { Layout, Responsive, WidthProvider } from "react-grid-layout";
import _ from "lodash";
import ContentBox from "components/ContentBox";
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
  const [mounted, setmounted] = useState(false);
  const [layouts, setLayouts] = useState<Layout[]>([
    { i: "a", x: 0, y: 0, w: 100, h: 20 },
    { i: "b", x: 1, y: 0, w: 100, h: 20 },
  ]);

  useEffect(() => {
    setmounted(true);
  }, [mounted]);

  const onDragStop = (
    layout: Layout[],
    oldItem: Layout,
    newItem: Layout,
    placeholder: Layout,
    e: MouseEvent,
    element: HTMLElement
  ): ItemCallback => {
    console.log(layout, oldItem, newItem, placeholder, e, element);
    return;
  };

  return (
    <ContentBox>
      <div className="h-full w-full bg-[#f7fbff] shadow">
        <ResponsiveReactGridLayout
          rowHeight={5}
          containerPadding={[10, 10]}
          breakpoints={{ lg: 100 }}
          cols={{ lg: 100 }}
          autoSize={true}
          onDragStop={onDragStop}
          onLayoutChange={() => setmounted(false)}
          layouts={{ layouts }}
          measureBeforeMount={true}
          useCSSTransforms={mounted}
          compactType={null}
          preventCollision={true}
          isDroppable={true}
          droppingItem={{ i: "xx", h: 2, w: 2 }}
        >
          {layouts.map((itm, i) => (
            <div
              key={itm.i}
              data-grid={itm}
              className="flex items-center justify-center bg-gray-light"
            >
              {i}
            </div>
          ))}
        </ResponsiveReactGridLayout>
      </div>
    </ContentBox>
  );
};

export default DashboardContent;
