import { Dispatch, SetStateAction } from "react";
import { useDrag } from "react-dnd";
import { Tooltip } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import "./index.css";

interface Props {
  name: string;
  setDroppedFields?: Dispatch<SetStateAction<string[]>>;
}

const SidebarItem: React.FC<Props> = ({ name, setDroppedFields }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "sidebarItem",
    item: { name },
    end: (_, monitor) => {
      // const dropResult = monitor.getDropResult<Props>();
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  });

  return (
    <div
      ref={drag}
      className="m-2 flex w-[calc(100%-20px)] items-center justify-between p-2 font-medium text-gray shadow hover:bg-mainLight hover:text-white"
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
      }}
    >
      <Tooltip title={name}>
        <div className="overflow-hidden text-ellipsis">{name}</div>
      </Tooltip>
      {setDroppedFields && (
        <CloseCircleOutlined
          className="h-fit hover:text-red"
          onClick={() =>
            setDroppedFields((prev) => prev.filter((el) => el !== name))
          }
        />
      )}
    </div>
  );
};

export default SidebarItem;
