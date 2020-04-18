// Imports
import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import ButtonBase from "../common/ButtonBase";

// Util imports
import {
  getCardDraggingStyle,
  getRemoveDroppingStyle,
  getDroppableDisplayStyle,
} from "../../utils/dndUtil";

import { Layout } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const { Content, Footer } = Layout;

// Component
const DndLayout = (props) => {
  // Initialize
  const [isDragging, setIsDragging] = useState(false);

  // <DragDropContext> methods
  const onBeforeCapture = (isDraggingOver) => {
    setIsDragging(isDraggingOver);
    // console.log("DRAG [START]!!!!!? => ", isDragging);
  };
  const onDragStart = () => {
    setIsDragging(true);
    console.log("DRAG [START]!!!!!? => ", isDragging);
  };
  const onDragEnd = (result) => {
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
                  btntype="danger"
                  btnsize="large"
                  btnshape="round"
                >
                  <DeleteOutlined />
                </ButtonBase>
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
  dropType: "WORK",
};

export default DndLayout;
