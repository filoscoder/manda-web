// Imports
import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
// App imports
import ButtonBase from "../common/ButtonBase";
// Util imports
import {
  getCardDraggingStyle,
  getRemoveDroppingStyle,
  getDroppableDisplayStyle
} from "../../utils/dndUtil";

import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

// Component
const DndLayout = props => {
  // Initialize
  const [isDragging, setIsDragging] = useState(false);
  // Called when "+" button ("Add to-do!") is clicked
  const addNewTodo = event => {
    console.log("[NEW TODO BUTTON] => ", event);
  };

  // <DragDropContext> methods
  const onBeforeCapture = isDraggingOver => {
    setIsDragging(isDraggingOver);
    // console.log("DRAG [START]!!!!!? => ", isDragging);
  };
  const onDragStart = () => {
    setIsDragging(true);
    console.log("DRAG [START]!!!!!? => ", isDragging);
  };
  const onDragEnd = result => {
    setIsDragging(false);
    const { source, destination } = result;

    // if there isn't a [destination]
    if (!destination) {
      return;
    }

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      console.log("[CARD REORDERED !]");
      return;
    } else {
      console.log("[CARD DELETED !]");
    }

    console.log("DRAG [END]!!!!!? => ", result);
  };

  return (
    <Layout hasSider={false}>
      {/* Create new To-do Button */}
      <Header style={{ background: "white" }}>
        <ButtonBase
          tooltip="Add to-do!"
          btnSize="large"
          btnBlock={true}
          btnStyle={{ background: "#55ba5c", color: "white", border: "none" }}
          iconType="plus"
          onClick={addNewTodo}
        />
      </Header>
      <DragDropContext
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onBeforeCapture={onBeforeCapture}
      >
        <Content style={{ overflowX: "auto" }}>
          {/* ["dropable-todos"] */}
          <Droppable
            droppableId={props.dropToReorderCard}
            ignoreContainerClipping={true}
          >
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={getCardDraggingStyle(snapshot.isDraggingOver)}
              >
                {/* Iterated TodoCard components */}
                {props.children}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Content>
        {/* ["dropable-trash"] */}
        <Droppable droppableId={props.dropToRemoveCard}>
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getDroppableDisplayStyle(isDragging)}
            >
              <Footer style={getRemoveDroppingStyle(snapshot.isDraggingOver)}>
                <ButtonBase
                  tooltip="Delete to-do?"
                  btnType="danger"
                  btnSize="large"
                  btnShape="round"
                  iconType="delete"
                />
              </Footer>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Layout>
  );
};

DndLayout.defaultProps = {
  dropToReorderCard: "dropable-todos",
  dropToRemoveCard: "dropable-remove",
  dropType: "WORK"
};

export default DndLayout;
