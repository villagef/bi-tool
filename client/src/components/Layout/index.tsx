import { ReactNode } from "react";
import { Layout } from "antd";
import "components/Layout/index.css";
import NavbarComponent from "components/Navbar";

type Props = {
  children?: ReactNode;
};

const LayoutComponent = ({ children }: Props) => {
  return (
    <Layout className="layout-wrapper">
      <NavbarComponent />
      <Layout className="site-layout">{children}</Layout>
    </Layout>
  );
};

export default LayoutComponent;
