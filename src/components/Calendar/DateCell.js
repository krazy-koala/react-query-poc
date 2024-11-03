import React from "react";
import { Badge } from "antd";

import { useTodosCount } from "../../api/useFetchTodos";

const DateCell = ({ date }) => {
  const { data = {} } = useTodosCount(date?.format("MM/DD/YYYY"));
  const { unsavedTodosCount, todosBeingCreatedCount, savedTodosCount } = data;
  let listData = [];

  if (savedTodosCount > 0) {
    listData.push({
      type: "success",
      content: `${savedTodosCount} saved todos`,
    });
  }

  if (todosBeingCreatedCount > 0) {
    listData.push({
      type: "processing",
      content: `${todosBeingCreatedCount} todos being created`,
    });
  }

  if (unsavedTodosCount > 0) {
    listData.push({
      type: "warning",
      content: `${unsavedTodosCount} unsaved todos`,
    });
  }

  return (
    <ul className="events">
      {listData.map((item) => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
};

export default DateCell;