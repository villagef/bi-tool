import { Layout, theme } from "antd";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const { Header } = Layout;

const HeaderBox = ({ children }: Props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Header className={`p-0 bg-[${colorBgContainer}]`}>{children}</Header>
    </>
  );
};

export default HeaderBox;
