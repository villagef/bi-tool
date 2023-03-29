import { useDrag } from "react-dnd";
import "./index.css";

interface Props {
  name: string;
}

const SidebarItem: React.FC<Props> = ({ name }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "sidebarItem",
    item: { name },
    end: (_, monitor) => {
      const dropResult = monitor.getDropResult<Props>();
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  });

  return (
    <div
      ref={drag}
      className="sidebar-item"
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
      }}
    >
      {name}
    </div>
  );
};

export default SidebarItem;
