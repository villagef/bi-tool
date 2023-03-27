import FieldsSider from "components/Sider/FieldsSider";
import PropertiesSider from "components/Sider/PropertiesSider";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import DashboardContent from "components/DashboardContent";

const DashboardPage = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <DashboardContent />
      <PropertiesSider />
      <FieldsSider />
    </DndProvider>
  );
};

export default DashboardPage;
