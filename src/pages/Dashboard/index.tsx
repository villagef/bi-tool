import { Layout, theme } from "antd";

const { Header, Content } = Layout;

const DashboardPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Header style={{ padding: 0, background: colorBgContainer }}>
        <div></div>
      </Header>
      <Content
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
          background: colorBgContainer,
        }}
      >
        DashboardPage
      </Content>
    </>
  );
};

export default DashboardPage;
