import React, { useState, useEffect } from "react";
import moment from "moment";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// Import Material-UI
import { Card, CardHeader } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done"; // Icon before Done
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser"; // Icon after Done
// Import ant-design
import { Tag, Button, Tooltip } from "antd";

const TodoCard = props => {
  const [isDone, setIsDone] = useState(false);

  const handleTodoDone = e => {
    console.log("TODO DONE!", e);
    setIsDone(!isDone);
  };

  return (
    <>
      <Card>
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
            <p style={{ fontWeight: "300", marginBottom: "0px" }}>
              <Tag color="magenta">{props.client}</Tag>
              <br />
              <Tag color="geekblue">{props.vendor}</Tag>
            </p>
          }
        />

        <p style={{ textAlign: "center" }}>{props.taskContent}</p>
      </Card>
    </>
  );
};

TodoCard.defaultProps = {
  taskDate: moment(new Date()).format("MMMM - Do"),
  taskContent: "내일 모모해야 하나 혹쉬?",
  taskPriority: "High",
  client: "APPLE KR",
  vendor: "앱스토어"
};

export default TodoCard;
