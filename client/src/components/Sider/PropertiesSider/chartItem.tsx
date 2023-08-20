import { useEffect } from "react";
import { useDrag } from "react-dnd";
import { useStore } from "store";

const ChartItem = ({ data }) => {
  const updateIsChartDragging = useStore(
    (state) => state.updateIsChartDragging
  );
  const [{ isDragging }, drag] = useDrag({
    type: "chartItem",
    item: { data },
    end: (_, monitor) => {
      // const dropResult = monitor.getDropResult<Props>();
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  });

  useEffect(() => {
    updateIsChartDragging(isDragging);
  }, [isDragging]);

  return (
    <div
      ref={drag}
      className="m-0.5 cursor-pointer p-1.5 text-xl text-gray hover:text-mainLight"
    >
      {data.source}
    </div>
  );
};

export default ChartItem;
