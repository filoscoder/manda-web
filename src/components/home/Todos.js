// Imports
import React from "react";

// import dummyData from "../../dummyTodos";

import { Tabs, Icon } from "antd";

const { TabPane } = Tabs;

// Component
const Todos = () => {
  function callback(key) {
    console.log(key);
  }
  return (
    <Tabs onChange={callback} type="card">
      <TabPane
        tab={
          <span>
            <Icon type="shopping" />
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
            <Icon type="idcard" />
            Personal
          </span>
        }
        key="2"
      >
        Content of Tab Pane 2
      </TabPane>
    </Tabs>
  );
};

export default Todos;
