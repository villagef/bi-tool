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
      <Content
        style={{
          margin: "8px 8px",
          padding: 12,
          background: colorBgContainer,
        }}
      >
        {children}
      </Content>
    </>
  );
};

export default ContentBox;
