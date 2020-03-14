// Imports
import React, { useState, useEffect } from "react";
import moment from "moment";
import { Draggable } from "react-beautiful-dnd";

// Util imports
import { getCardStyle, getTagContentStyle } from "../../utils/dndUtil";

// Import ant-design
import { Tag, Tooltip, Card, Checkbox, Select, Icon } from "antd";
const { Meta } = Card;

// Component
const TodoCard = props => {
  // Initialize
  const [tagOptions, setTagOptions] = useState([props.client, props.vendor]);
  const [editTags, setEditTags] = useState(true);
  // Called when [Card] checkbox is clicked
  const handleCheckBox = e => {
    console.log(`checked = ${e.target.checked}`);
    console.log(e.target);
  };

  const handleTagInput = value => {
    setTagOptions(() => [...tagOptions, value]);
    console.log(tagOptions);
  };
  return (
    // draggableId & index MUST BE UNIQUE!
    <Draggable draggableId={props.dragId} index={props.dragIndex}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card
            className="draggable-card"
            hoverable={true}
            size="small"
            style={getCardStyle(props.taskPriority)}
            headStyle={{ border: "none" }}
            bodyStyle={{ padding: "auto" }}
            title={
              props.todoType === "Work" ? (
                <Checkbox className={props.dragId} onChange={handleCheckBox}>
                  <Tooltip title={props.taskContent}>
                    {props.taskContent}
                  </Tooltip>
                </Checkbox>
              ) : (
                ""
              )
            }
          >
            <Meta
              title={
                props.todoType === "Personal" ? (
                  <Checkbox onChange={handleCheckBox}>
                    <Tooltip title={props.taskContent}>
                      {props.taskContent}
                    </Tooltip>
                  </Checkbox>
                ) : (
                  <Select
                    size="small"
                    mode="tags"
                    showArrow
                    suffixIcon={
                      <Icon
                        type="tag"
                        theme="filled"
                        style={{ color: "#00152A" }}
                      />
                    }
                    defaultValue={tagOptions}
                    tokenSeparators={[","]}
                    disabled={editTags}
                    onMouseEnter={() => setEditTags(false)}
                    onMouseLeave={() => setEditTags(true)}
                    onChange={handleTagInput}
                    style={getTagContentStyle()}
                  />
                )
              }
            />
          </Card>
        </div>
      )}
    </Draggable>
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
