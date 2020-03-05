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
  const onDragEnd = () => {
    setIsDragging(false);
    console.log("DRAG [END]!!!!!? => ", isDragging);
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
      <DragDropContext
        onDragEnd={result => console.log("onDragEnd => ", result)}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        <Content style={{ overflowX: "hidden", overflowX: "auto" }}>
          <Droppable
            droppableId={props.dropToReorderCard}
            ignoreContainerClipping={true}
            type={props.dropType}
          >
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getCardDraggingStyle(snapshot.isDraggingOver)}
              >
                {props.children}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Content>
        {isDragging ? (
          <Droppable
            droppableId={props.dropToRemoveCard}
            ignoreContainerClipping={true}
          >
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                // style={getCardDraggingStyle(snapshot.isDraggingOver)}
              >
                <Footer style={{ textAlign: "center" }}>
                  <Tooltip title="Delete to-do?">
                    <Button type="danger" shape="round" size="large">
                      <Icon type="delete" />
                    </Button>
                  </Tooltip>
                </Footer>

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ) : (
          ""
        )}
      </DragDropContext>
    </Layout>
  );
};

DndLayout.defaultProps = {
  dropToReorderCard: "dropable-reordable",
  dropToRemoveCard: "dropable-removable",
  dropType: "WORK"
};

export default DndLayout;
