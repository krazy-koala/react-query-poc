import React, { useState } from "react";
import { FloatButton, List } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { useTodosByDate } from "../../api/useFetchTodos";
import CreateUnsavedTodoModal from "./CreateUnsavedTodoModal";
import TodoListSpinner from "./TodoListSpinner";
import SavedTodo from "./SavedTodo";
import UnsavedTodo from "./UnsavedTodo";
import TodoListHeader from "./TodoListHeader";

const TodoList = ({ date }) => {
  const [showCreateTodoModal, setShowCreateTodoModal] = useState(false);
  const { data: todosByDate, isLoading } = useTodosByDate();
  const todos = todosByDate?.get(date?.format("MM/DD/YYYY")) ?? [];

  const handleCloseModal = () => setShowCreateTodoModal(false);

  const handleOpenModal = () => setShowCreateTodoModal(true);

  if (isLoading) {
    return <TodoListSpinner />;
  }

  return (
    <div>
      <CreateUnsavedTodoModal
        open={showCreateTodoModal}
        onOk={handleCloseModal}
        onCancel={handleCloseModal}
        date={date}
      />
      <List
        header={<TodoListHeader date={date} />}
        bordered
        dataSource={Object.keys(todos).map((id) => todos[id])}
        renderItem={(item) => (
          <List.Item>
            {item.type === "unsaved" ? (
              <UnsavedTodo item={item} />
            ) : (
              <SavedTodo item={item} />
            )}
          </List.Item>
        )}
      />
      <FloatButton icon={<PlusOutlined />} onClick={handleOpenModal} />
    </div>
  );
};

export default TodoList;
