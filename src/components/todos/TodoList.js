// Imports
import React, { useState, useEffect } from "react";

// App imports
import DndLayout from "../common/DndLayout";
import TodoCard from "../todos/TodoCard";

import dummyDatas from "../../dummyTodos";

// Ant-design imports
import { Tabs, Icon, Result } from "antd";
const { TabPane } = Tabs;

// Component
const TodoList = props => {
  // Initialize
  const [selectedTab, setSelectedTab] = useState("Work");
  const [workTodos, setWorkTodos] = useState([]);
  const [personalTodos, setPersonalTodos] = useState([]);

  // Called when [Work] || [Personal] tab is selected
  const getSelectedTabKey = key => {
    setSelectedTab(key);
    console.log("Selected [Tab] => ", selectedTab);
    switch (key) {
      case "Work":
        setWorkTodos(dummyDatas);
        console.log("[Work-Todos]:\n", workTodos);
        break;
      case "Personal":
        setPersonalTodos(dummyDatas);
        console.log("[Personal-Todos]:\n", personalTodos);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    setWorkTodos(dummyDatas);
    setPersonalTodos(dummyDatas);
  }, []);

  return (
    <Tabs
      onChange={getSelectedTabKey}
      defaultActiveKey={selectedTab}
      type="card"
    >
      {/* TAB 1 => [WORK] */}
      <TabPane
        tab={
          <span>
            <Icon type={props.tab1Icon} />
            {props.tab1Key}
          </span>
        }
        key={props.tab1Key}
      >
        {/* Content of Tab Pane 1 */}
        <div className="tab-1-content">
          <DndLayout dropId={"dropable-1"} dropType={props.tab1Key}>
            {workTodos ? (
              workTodos.map((currentValue, index) => (
                <TodoCard
                  key={index}
                  todoType={selectedTab}
                  dragId={currentValue.id}
                  dragIndex={index}
                  taskContent={currentValue.taskContent}
                  taskPriority={currentValue.taskPriority}
                  client={currentValue.client}
                  vendor={currentValue.vendor}
                  createdAt={currentValue.createdAt}
                  updatedAt={currentValue.updatedAt}
                />
              ))
            ) : (
              <Result
                icon={<Icon type="meh" />}
                title="일 안해!?"
                subTitle="현아야하.. 피라미드 꼭대기 올라가야쥐!"
              />
            )}
          </DndLayout>
        </div>
      </TabPane>
      {/* TAB 2 => [PERSONAL] */}
      <TabPane
        tab={
          <span>
            <Icon type={props.tab2Icon} />
            {props.tab2Key}
          </span>
        }
        key={props.tab2Key}
      >
        {/* Content of Tab Pane 2 */}
        <div className="tab-2-content">
          <DndLayout dropId={"dropable-2"} dropType={props.tab2Key}>
            {personalTodos ? (
              personalTodos.map((currentValue, index) => (
                <TodoCard
                  key={index}
                  todoType={selectedTab}
                  dragId={currentValue.id}
                  dragIndex={currentValue.index}
                  taskContent={currentValue.taskContent}
                  taskPriority={currentValue.taskPriority}
                  client={currentValue.client}
                  vendor={currentValue.vendor}
                  createdAt={currentValue.createdAt}
                  updatedAt={currentValue.updatedAt}
                />
              ))
            ) : (
              <Result
                icon={<Icon type="smile" />}
                title="Relax"
                subTitle="일 없음돠! 헿"
              />
            )}
          </DndLayout>
        </div>
      </TabPane>
    </Tabs>
  );
};

TodoList.defaultProps = {
  tab1Key: "Work",
  tab2Key: "Personal",
  tab1Icon: "shopping",
  tab2Icon: "idcard",
  selectedMode: "Month"
};

export default TodoList;
