import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Flex, Layout } from "antd";
import { Outlet } from "react-router-dom";

import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import Notification from "./components/Notification/Notification";

const { Content, Header, Sider } = Layout;

const queryClient = new QueryClient();

const Logo = () => (
  <div
    style={{
      height: 32,
      margin: 16,
      background: "rgba(255, 255, 255, .2)",
      borderRadius: 6,
    }}
  />
);

const AppRootHeader = () => {
  return (
    <Flex align="center" justify="space-between">
      <b style={{ fontSize: 24 }}>Todo Calendar</b>
      <Notification />
    </Flex>
  );
}

const AppRoot = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout style={{ height: "100vh" }}>
        <Sider>
          <Logo />
          <NavigationMenu />
        </Sider>
        <Layout>
          <Header style={{ background: "white" }}>
            <AppRootHeader />
          </Header>
          <Content style={{ padding: 16 }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </QueryClientProvider>
  );
};

export default AppRoot;
