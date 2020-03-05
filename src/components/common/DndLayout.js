// Imports
import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

// Util imports
import { getCardDraggingStyle } from "../../utils/dndUtil";

import { Layout, Button, Tooltip, Icon } from "antd";

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
  const onDragStart = () => {
    setIsDragging(true);
    console.log("DRAG [START]!!!!!? => ", isDragging);
  };
  const onDragEnd = result => {
    setIsDragging(false);
    // if there isn't a [destination]
    if (!result.destination) {
      return;
    }
    const { source, destination } = result;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      console.log("[SAME] SPOT!");
      return;
    } else {
      console.log("[ANOTHER] SPOT!");
    }

    console.log("DRAG [END]!!!!!? => ", result);
  };

  return (
    <Layout hasSider={false} style={{ maxHeight: "80vh" }}>
      <Header style={{ background: "white" }}>
        <Tooltip title="Add to-do!">
          <Button
            size="large"
            block={true}
            onClick={addNewTodo}
            style={{ background: "#55ba5c", color: "white", border: "none" }}
          >
            <Icon type="plus" />
          </Button>
        </Tooltip>
      </Header>
      <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <Content style={{ overflowX: "auto" }}>
          <Droppable
            droppableId="dropable-reordable"
            ignoreContainerClipping={true}
          >
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={getCardDraggingStyle(snapshot.isDraggingOver)}
              >
                {props.children}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Content>

        <Footer style={{ textAlign: "center" }}>
          <Droppable droppableId="dropable-removable">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  backgroundColor: snapshot.isDraggingOver
                    ? "blue"
                    : "transparent"
                }}
              >
                <Tooltip title="Delete to-do?">
                  <Button type="danger" shape="round" size="large" block={true}>
                    <Icon type="delete" />
                  </Button>
                </Tooltip>
              </div>
            )}
          </Droppable>
        </Footer>
      </DragDropContext>
    </Layout>
  );
};

DndLayout.defaultProps = {
  dropToReorderCard: "dropable-reordable",
  dropToRemoveCard: "dropableRemovable",
  dropType: "WORK"
};

export default DndLayout;
