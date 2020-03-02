import React, { useState, useEffect } from "react";

// Import ant-design
import { Result, Icon } from "antd";
// Import material-ui
import Grid from "@material-ui/core/Grid";

// App import
import TodoCard from "../todos/TodoCard";
// Mock data import
import dummyData from "../../dummyTodos";

const TodoList = props => {
  const [workTodos, setWorkTodos] = useState();
  const [personalTodos, setPersonalTodos] = useState();

  //   [Schedule] selectedMode: ["month"] || ["year"]
  switch (props.selectedMode) {
    case "month":
      return (
        //   ["month"] TodoType: ["work"] || ["personal"]
        <>
          <Grid container spacing={1}>
            {/* ["work"] : [Todo grid container] || [Result 404] */}
            <Grid item sm={6}>
              {workTodos ? (
                <Grid container justify="center" spacing={2}>
                  {workTodos.map(item => (
                    <Grid key={item.id} item>
                      <TodoCard
                        taskDate={item.taskDate}
                        taskContent={item.taskContent}
                        taskPriority={item.taskPriority}
                        client={item.client}
                        vendor={item.vendor}
                      />
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Result
                  icon={<Icon type="meh" />}
                  title="일 안해!?"
                  subTitle="현아야하.. 피라미드 꼭대기 올라가야쥐!"
                />
              )}
            </Grid>

            {/* ["personal"] : [Todo grid container] || [Result 404] */}
            <Grid item sm={6}>
              {personalTodos ? (
                <Grid container justify="center" spacing={2}>
                  {personalTodos.map(item => (
                    <Grid key={item.id} item>
                      <TodoCard
                        taskDate={item.taskDate}
                        taskContent={item.taskContent}
                        taskPriority={item.taskPriority}
                        client={item.client}
                        vendor={item.vendor}
                      />
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Result
                  icon={<Icon type="smile" />}
                  title="Relax"
                  subTitle="일 없음돠! 헿"
                />
              )}
            </Grid>
          </Grid>
        </>
      );
    case "year":
      return <h1>YEAR CONTENT!</h1>;
    default:
      break;
  }
};

export default TodoList;
