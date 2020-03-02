// Imports
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import moment from "moment";
// App Imports
import TodoList from "../todos/TodoList";

// Import ant-design
import { Calendar, Badge, Drawer } from "antd";

// Component
const Schedule = props => {
  // initialize
  const [showDrawer, setShowDrawer] = useState(false);
  const [selectedDate, setSelectedDate] = useState(moment(new Date()));
  const [selectedMode, setSelectedMode] = useState("month");

  /*
   * [Calendar] Helper functions
   */

  // Call when select a [Date] or [Month]
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
    setShowDrawer(!showDrawer);
  };

  // Called when Panel mode change: [MONTH] / [YEAR]
  function onPanelChange(value, mode) {
    setSelectedMode(mode);
    console.log("SELECTED [MODE] => ", selectedMode);
  }

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
          onPanelChange={onPanelChange}
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
        width={420}
      >
        <DragDropContext>
          <TodoList selectedMode={selectedMode} />
        </DragDropContext>
      </Drawer>
    </>
  );
};
export default Schedule;
