import { ConfigProvider, theme } from "antd";
import { useAtomValue } from "jotai";

import Router from "./Router";
import themeAtom from "./store/themeAtom";

const { defaultAlgorithm, darkAlgorithm } = theme;

const App = () => {
  const selectedTheme = useAtomValue(themeAtom);
  return (
    <ConfigProvider
      theme={{
        algorithm: selectedTheme === "dark" ? darkAlgorithm : defaultAlgorithm,
        components: {
          Layout: {
            headerBg: selectedTheme === "dark" ? "#001529" : "white",
          },
        },
      }}
    >
      <Router />
    </ConfigProvider>
  );
};

export default App;
