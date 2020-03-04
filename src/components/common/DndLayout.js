// Imports
import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

// Util imports
import { getCardDraggingStyle } from "../../utils/dndUtil";

import { Layout, Button, Tooltip, Icon } from "antd";

const { Header, Footer, Sider, Content } = Layout;

// Component
const DndLayout = props => {
  return (
    <Layout hasSider={false} style={{ maxHeight: "75vh", minWidth: "20vw" }}>
      <Header style={{ background: "white" }}>
        <Tooltip title="Add to-do!">
          <Button
            // shape="round"
            size="large"
            block={true}
            style={{ background: "#55ba5c", color: "white", border: "none" }}
          >
            <Icon type="plus" />
          </Button>
        </Tooltip>
      </Header>
      <Content style={{ overflowX: "hidden", overflowX: "auto" }}>
        <DragDropContext
          onDragEnd={result => console.log("onDragEnd => ", result)}
        >
          <Droppable
            droppableId={props.dropId}
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
        </DragDropContext>
      </Content>
    </Layout>
  );
};

DndLayout.defaultProps = {
  dropId: "dropable-1",
  dropType: "WORK",
  dragId: "dragable-1",
  dragIndex: 1
};

export default DndLayout;
