// Imports
import React from "react";

// import dummyData from "../../dummyTodos";
import { ScheduleOutlined, SolutionOutlined } from "@ant-design/icons";
import { Tabs } from "antd";

const { TabPane } = Tabs;

// Component
const Todos = () => {
  function callback(key) {
    console.log(key);
  }
  return (
    <div style={{ padding: 20 }}>
      <Tabs onChange={callback} type="card">
        <TabPane
          tab={
            <span>
              <ScheduleOutlined />
              Work
            </span>
          }
          key="1"
        >
          Content of Tab Pane 1
        </TabPane>
        <TabPane
          tab={
            <span>
              <SolutionOutlined />
              Personal
            </span>
          }
          key="2"
        >
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Todos;
