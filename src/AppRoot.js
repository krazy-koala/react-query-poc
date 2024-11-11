import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Flex, Layout, Switch } from "antd";
import { Outlet } from "react-router-dom";
import { SunFilled, SunOutlined } from "@ant-design/icons";
import { useSetAtom } from "jotai";

import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import Notification from "./components/Notification/Notification";
import themeAtom from "./store/themeAtom";

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
  const setTheme = useSetAtom(themeAtom);
  
  const handleSwitchTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <Flex align="center" justify="space-between">
      <b style={{ fontSize: 24 }}>Todo Calendar</b>
      <Flex align="center" gap="middle">
        <Switch
          checkedChildren={<SunFilled />}
          unCheckedChildren={<SunOutlined />}
          onChange={handleSwitchTheme}
        />
        <Notification />
      </Flex>
      
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
          <Header>
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
