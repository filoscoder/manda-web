import todoPriorityColor from "../const/todoPriorityColor";

// a little function to help us with reordering the result
export const Reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const getCardDraggingStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightgray" : "transparent",
  width: 270
});
export const getCardStyle = taskPriority => ({
  margin: "2px",
  borderRadius: "5px",
  background: `${todoPriorityColor[taskPriority]}`
});
export const getTagContentStyle = () => ({
  fontWeight: "400",
  margin: "0px",
  float: "right"
});
export const getRemoveDroppingStyle = isDraggingOver => ({
  textAlign: "center",
  backgroundColor: isDraggingOver ? "#fcd9d9" : "transparent"
});
export const getDroppableDisplayStyle = isDragging => ({
  display: isDragging ? "block" : "none"
});
