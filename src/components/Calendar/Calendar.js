import React from "react";
import { Calendar as AntDCalendar } from "antd";

import DateCell from "./DateCell";
import MonthCell from "./MonthCell";

import "./Calendar.css";

const Calendar = ({ onSelect }) => {
  const cellRender = (date, info) => {
    switch (info.type) {
      case "date":
        return <DateCell date={date} />;
      case "month":
        return <MonthCell date={date} />;
      default:
        return info.originNode;
    }
  };

  return (
    <div className="calendar">
      <AntDCalendar cellRender={cellRender} onSelect={onSelect} />
    </div>
  );
};

export default Calendar;
