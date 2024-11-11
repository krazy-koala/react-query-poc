import React, { useState } from "react";
import { Drawer, Flex, Tabs } from "antd";

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

  const viewModeTabs = [
    {
      key: "calendar",
      label: "Calendar",
      children: <Calendar onSelect={handleDateSelect} />,
    },
    {
      key: "listView",
      label: "List View",
      children: "List View",
    },
  ];

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
      <Tabs
        defaultActiveKey="calendar"
        items={viewModeTabs}
        tabBarExtraContent={<FilterDropdown />}
      />
    </Flex>
  );
};

export default Dashboard;
