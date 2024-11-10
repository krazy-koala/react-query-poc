import React from "react";
import { Button, Flex, Spin } from "antd";

import useSaveTodo from "../../api/useSaveTodo";
import useDeleteTodo from "../../api/useDeleteTodo";

const UnsavedTodo = ({ item }) => {
  const { mutate: saveTodo } = useSaveTodo();
  const { mutate: deleteTodo } = useDeleteTodo();
  const { isLoading, isDeleting, isSaving, title } = item;
  const loadingMessage = `Creating Todo for ${title}`;
  const isDisabled = isLoading || isDeleting;

  const handleSave = () => {
    saveTodo(item);
  };

  const handleDelete = () => {
    deleteTodo(item);
  };

  return isLoading ? (
    <Flex gap="small">
      <Spin />
      <span>{loadingMessage}</span>
    </Flex>
  ) : (
    <Flex justify="space-between" style={{ width: "100%" }}>
      <span>{title}</span>
      <Flex gap="small">
        <Button
          onClick={handleSave}
          disabled={isDisabled}
          loading={isSaving}
          size="small"
        >
          Save
        </Button>
        <Button
          onClick={handleDelete}
          disabled={isDisabled}
          loading={isDeleting}
          size="small"
        >
          Delete
        </Button>
      </Flex>
    </Flex>
  );
};

export default UnsavedTodo;
