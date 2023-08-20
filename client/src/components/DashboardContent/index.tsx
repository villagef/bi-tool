import { Responsive, WidthProvider } from "react-grid-layout";
import { useDrop } from "react-dnd";
import _ from "lodash";
import { useStore } from "store";
import ContentBox from "components/ContentBox";
import "./index.css";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const DashboardContent = () => {
  const [gridLayouts, isChartDragging, updateGridLayouts] = useStore(
    (state) => [
      state.gridLayouts,
      state.isChartDragging,
      state.updateGridLayouts,
    ]
  );

  const [{}, drop] = useDrop(() => ({
    accept: "chartItem",
    drop: (element: any) =>
      updateGridLayouts({
        i: element.data.id,
        x: 0,
        y: 0,
        w: 96,
        h: 20,
        minW: 12,
        minH: 8,
        isBounded: true,
        isDraggable: true,
      }),
  }));

  return (
    <ContentBox>
      <div
        className="relative h-full w-full bg-[#f7fbff] p-2.5 shadow"
        ref={drop}
      >
        {isChartDragging && (
          <div className="absolute z-10 h-[calc(100%-20px)] w-[calc(100%-20px)] bg-gray-dark bg-opacity-10 " />
        )}
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
          // onDragStop={onDragStop}
          layouts={{ lg: gridLayouts }}
          measureBeforeMount={true}
          useCSSTransforms={true}
          compactType={null}
          preventCollision={true}
          isDroppable={true}
        >
          {gridLayouts?.map((itm) => (
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
