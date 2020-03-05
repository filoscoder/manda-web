// Imports
import React, { useState } from "react";
import moment from "moment";
// App Imports
import TodoList from "../todos/TodoList";

// Import ant-design
import { Calendar, Badge, Drawer } from "antd";

// Component
const Schedule = props => {
  // initialize
  const [showDrawer, setShowDrawer] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    moment(new Date()).format("MMMM - Do")
  );
  const [selectedMode, setSelectedMode] = useState("month");

  /*
   * [Calendar] Helper functions
   */

  // Called when [Date] || [Month] is selected
  const getSelectedGrid = value => {
    console.log("SELECTED [GRID] => ", selectedDate);

    switch (selectedMode) {
      case "month":
        setSelectedDate(moment(value).format("MMMM - Do"));
        break;
      case "year":
        setSelectedDate(moment(value).format("MMMM - YYYY"));
        break;
      default:
        setSelectedDate(moment(value).format("MMMM - Do"));
        break;
    }
    // show Todo [Drawer]
    setShowDrawer(!showDrawer);
  };

  // Called when Panel mode [MONTH] || [YEAR] is selected
  const getSelectedPanel = (value, mode) => {
    // set selected panel mode
    setSelectedMode(mode);
    console.log("SELECTED [MODE] => ", selectedMode);
  };

  // Selected [Date] Todo list
  const getListData = value => {
    // console.log("getListData: VALUE: ", value.date());
    let listData;
    switch (value.date()) {
      case 20:
        listData = [
          { type: "warning", content: "This is warning event." },
          { type: "success", content: "This is usual event." }
        ];
        break;
      case 19:
        listData = [
          { type: "warning", content: "This is warning event." }
          // { type: "success", content: "This is usual event." },
          // { type: "error", content: "This is error event." }
        ];
        break;
      case 15:
        listData = [
          { type: "warning", content: "This is warning event" }
          // { type: "success", content: "This is very long usual event。。...." },
          // { type: "error", content: "This is error event 1." },
          // { type: "error", content: "This is error event 2." },
          // { type: "error", content: "This is error event 3." },
          // { type: "error", content: "This is error event 4." }
        ];
        break;
      default:
    }
    return listData || [];
  };

  // Render [Date] todo preview data
  const dateCellRender = value => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  // [Month] functions
  const getMonthData = value => {
    if (value.month() === 8) {
      return 1394;
    }
  };

  const monthCellRender = value => {
    const num = getMonthData(value);
    return num ? (
      <div className="ant-fullcalendar-month-panel-cell">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  /*
   * [Drawer] Helper function
   */
  // const handleEditingClosing = key => value => {
  //   setEditingClosing(prev => ({
  //     ...prev,
  //     [key]: value
  //   }));
  //   console.log("edting", editingClosing);
  // };

  return (
    <>
      <div>
        <Calendar
          onPanelChange={getSelectedPanel}
          dateCellRender={dateCellRender}
          monthCellRender={monthCellRender}
          onSelect={getSelectedGrid}
        />
      </div>
      <Drawer
        title={selectedDate}
        placement="left"
        closable={true}
        onClose={() => {
          setShowDrawer(!showDrawer);
        }}
        visible={showDrawer}
        width={320}
      >
        <TodoList selectedMode={selectedMode} />
      </Drawer>
    </>
  );
};
export default Schedule;
