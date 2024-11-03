import React from "react";
import { Flex, Spin } from "antd";

const TodoSpinner = () => {
  return (
    <Flex
      vertical
      align="center"
      justify="center"
      gap="small"
      style={{ height: "100%" }}
    >
      <Spin size="large" />
      <div>Fetching todos...</div>
    </Flex>
  );
};

export default TodoSpinner;