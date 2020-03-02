import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// Import ant-design
import { Calendar, Badge, Drawer } from "antd";

const TodoToday = props => {
  return (
    <div>
      <DragDropContext>
        <Droppable droppableId="1">
          {provided => {
            <p>Some contents...1</p>;
          }}
          <Draggable></Draggable>
          <Draggable>
            <p>Some contents...2</p>
          </Draggable>
          <Draggable>
            <p>Some contents...3</p>
          </Draggable>
        </Droppable>
      </DragDropContext>
    </div>
  );
};

// TodoToday.defaultProps = {
//   closingAt: new Date(),
//   managerId: undefined,
//   customerId: undefined,
//   memo: undefined,
//   mediaId: undefined,
//   onChangeClosingAt: () => {},
//   onChangeManager: () => {},
//   onChangeCustomer: () => {},
//   onChangeMemo: () => {},
//   onChangeFileUrl: () => {}
// };

export default TodoToday;
