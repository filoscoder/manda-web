// Imports
import React from "react";

// Import ant-design
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

// Component
const NavMenu = props => {
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
            <Icon type={props.itemIcon1} />
            <span>{props.item1}</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/schedule">
            <Icon type={props.itemIcon2} />
            <span>{props.item2}</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/todos">
            <Icon type={props.itemIcon3} />
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
  itemIcon3: null
};

export default NavMenu;
