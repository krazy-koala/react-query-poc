import React from "react";
import { Flex, Dropdown, Badge } from "antd";
import { BellOutlined, LoadingOutlined } from "@ant-design/icons";

import { useTodosBeingCreated } from "../../api/useFetchTodos";

const NotificationItem = ({ todo }) => {
  const dateString = new Date(todo.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const label = `Todo ${todo.title} being created for ${dateString}`;
  return (
    <Flex gap="small">
      <LoadingOutlined spin />
      {label}
    </Flex>
  );
};

const Notification = () => {
  const { data: todosBeingCreated = [] } = useTodosBeingCreated();
  const items = todosBeingCreated.map((todo) => ({
    key: todo.id,
    label: <NotificationItem todo={todo} />,
  }));
  return (
    <Dropdown menu={{ items }}>
      <Badge count={items.length} size="small">
        <BellOutlined style={{ fontSize: 20 }} />
      </Badge>
    </Dropdown>
  );
};

export default Notification;
