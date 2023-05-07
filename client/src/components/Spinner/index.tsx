import { Layout, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Icon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const SpinnerComponent = () => {
  return (
    <Layout className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
      <Spin indicator={Icon} />
    </Layout>
  );
};

export default SpinnerComponent;
