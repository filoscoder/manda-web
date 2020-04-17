// Imports
import React from "react";

// Import ant-design
import { Menu } from "antd";
import { HomeFilled, CalendarFilled, ScheduleFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

// Component
const NavMenu = (props) => {
  return (
    <>
      <Menu
        theme={props.menuTheme}
        defaultSelectedKeys={["1"]}
        mode={props.menuMode}
        inlineIndent={props.menuInLineIndent}
        style={{ width: "inherit" }}
      >
        <Menu.Item key="1">
          <Link to="/">
            <HomeFilled />
            <span>{props.item1}</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/schedule">
            <CalendarFilled />
            <span>{props.item2}</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/todos">
            <ScheduleFilled />
            <span>{props.item3}</span>
          </Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

NavMenu.defaultProps = {
  menuTheme: "light",
  menuMode: "vertical",
  menuInLineIndent: 24,
  item1: null,
  itemIcon1: null,
  item2: null,
  itemIcon2: null,
  item3: null,
  itemIcon3: null,
};

export default NavMenu;
