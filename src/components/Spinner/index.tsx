import { Layout, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "components/Spinner/index.css";

const Icon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const SpinnerComponent = () => {
  return (
    <Layout className="spinner-wrapper">
      <Spin indicator={Icon} />
    </Layout>
  );
};

export default SpinnerComponent;
