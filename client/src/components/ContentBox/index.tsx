import { Layout, theme } from "antd";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const { Content } = Layout;

const ContentBox = ({ children }: Props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Content className={`m-2 bg-[${colorBgContainer}] p-3`}>
        {children}
      </Content>
    </>
  );
};

export default ContentBox;
