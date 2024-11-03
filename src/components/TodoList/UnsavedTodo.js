import React from "react";
import { Button, Flex, Spin } from "antd";

import useSaveTodo from "../../api/useSaveTodo";

const UnsavedTodo = ({ item }) => {
  const { mutate: saveTodo } = useSaveTodo();
  const { isLoading, isSaving, title } = item;
  const loadingMessage = `Creating Todo for ${title}`;

  const handleSave = () => {
    saveTodo(item);
  };

  return isLoading ? (
    <Flex gap="small">
      <Spin />
      <span>{loadingMessage}</span>
    </Flex>
  ) : (
    <Flex justify="space-between" style={{ width: "100%" }}>
      <span>{title}</span>
      <Button
        onClick={handleSave}
        disabled={isSaving}
        loading={isSaving}
        size="small"
      >
        Save
      </Button>
    </Flex>
  );
};

export default UnsavedTodo;