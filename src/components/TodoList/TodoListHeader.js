import React from "react";
import { Flex } from "antd";

import { useTodosCount } from "../../api/useFetchTodos";

const TodoListHeader = ({ date }) => {
  const { data = {} } = useTodosCount(date?.format("MM/DD/YYYY"));
  const { unsavedTodosCount, savedTodosCount } = data;
  return (
    <Flex justify="space-between">
      <b>Todo List</b>
      <b>
        Unsaved: {unsavedTodosCount} | Saved: {savedTodosCount}
      </b>
    </Flex>
  );
};

export default TodoListHeader;