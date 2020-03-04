import React, { useState, useEffect } from "react";
import moment from "moment";
import { Draggable } from "react-beautiful-dnd";

// Import Material-UI
import { Card, CardHeader } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done"; // Icon before Done
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser"; // Icon after Done

// Import ant-design
import { Tag, Button, Tooltip } from "antd";

const TodoCard = props => {
  const [isDone, setIsDone] = useState(false);
  const [todosType, setTodosType] = useState(props.todoType);

  const handleTodoDone = e => {
    console.log("TODO DONE!", e);
    setIsDone(!isDone);
  };

  return (
    <>
      {/* draggableId & index MUST BE UNIQUE! */}
      <Draggable draggableId={props.dragId} index={props.dragIndex}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Card style={{ margin: "5px" }}>
              <CardHeader
                action={
                  <Tooltip title="is Done?">
                    <Button
                      style={{ border: "none" }}
                      shape="circle"
                      size="small"
                      onClick={handleTodoDone}
                    >
                      {isDone ? <VerifiedUserIcon /> : <DoneIcon />}
                    </Button>
                  </Tooltip>
                }
                subheader={
                  <>
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "12px",
                        margin: "0px auto"
                      }}
                    >
                      {props.taskContent}
                    </p>
                    <p
                      style={{
                        fontWeight: "300",
                        marginTop: "0px",
                        marginBottom: "0px"
                      }}
                    >
                      <Tag color="magenta" style={{ fontSize: "9px" }}>
                        {props.client}
                      </Tag>
                      {/* <br /> */}
                      <Tag color="geekblue" style={{ fontSize: "9px" }}>
                        {props.vendor}
                      </Tag>
                    </p>
                  </>
                }
              />
            </Card>
          </div>
        )}
      </Draggable>
    </>
  );
};

TodoCard.defaultProps = {
  taskDate: moment(new Date()).format("MMMM - Do"),
  taskContent: "내일 모모해야 하나 혹쉬?",
  taskPriority: "High",
  client: "APPLE KR",
  vendor: "앱스토어",
  createdAt: "",
  updatedAt: ""
};

export default TodoCard;
