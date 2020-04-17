import React from "react";

export const priorityColor = {
  High: "#BCAAA4",
  Normal: "#D7CCC8",
  Low: "#EFEBE9",
};

export const ThemeContext = React.createContext();

export const PriorityColorProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={priorityColor}>
      {children}
    </ThemeContext.Provider>
  );
};
