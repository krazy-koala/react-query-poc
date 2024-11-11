import React, { useState } from "react";
import { Drawer, Flex } from "antd";

import Calendar from "../components/Calendar/Calendar";
import TodoList from "../components/TodoList/TodoList";
import FilterDropdown from "../components/FilterBar/FilterDropdown";

const Dashboard = () => {
  const [showDrawer, setShowDrawer] = useState();
  const [selectedDate, setSelectedDate] = useState();

  const handleDrawerClose = () => {
    setShowDrawer(false);
  };

  const handleDateSelect = (date, info) => {
    if (info.source === "date") {
      setShowDrawer(true);
      setSelectedDate(date);
    }
  };

  return (
    <Flex vertical gap="middle">
      <Drawer
        title="Todos"
        placement="bottom"
        closable={true}
        onClose={handleDrawerClose}
        open={showDrawer}
        key="todosDrawer"
        size="large"
      >
        <TodoList date={selectedDate} />
      </Drawer>
      <Flex justify="right" style={{ paddingLeft: 28, paddingRight: 28 }}>
        <FilterDropdown />
      </Flex>
      <Calendar onSelect={handleDateSelect} />
    </Flex>
  );
};

export default Dashboard;
