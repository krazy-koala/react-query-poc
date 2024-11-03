import React, { useState } from "react";
import { Drawer } from "antd";

import Calendar from "../components/Calendar/Calendar";
import TodoList from "../components/TodoList/TodoList";

const Dashboard = () => {
  const [showDrawer, setShowDrawer] = useState();
  const [selectedDate, setSelectedDate] = useState();

  const handleDrawerClose = () => {
    setShowDrawer(false);
  };

  const handleDateSelect = (date) => {
    setShowDrawer(true);
    setSelectedDate(date);
  };

  return (
    <>
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
      <Calendar onSelect={handleDateSelect} />
    </>
  );
};

export default Dashboard;
