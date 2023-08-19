import { ReactNode } from "react";
import { Layout } from "antd";
import NavbarComponent from "components/Navbar";

type Props = {
  children?: ReactNode;
};

const LayoutComponent = ({ children }: Props) => {
  return (
    <Layout className="h-full min-h-screen w-full overflow-x-hidden">
      <NavbarComponent />
      <Layout className="bg-background-main">{children}</Layout>
    </Layout>
  );
};

export default LayoutComponent;
