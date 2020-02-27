// Imports
import React from "react";
import { Menu, Icon } from "antd";

// App Imports

// Component
const NavMenu = props => {
  return (
    <>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="horizontal">
        <Menu.Item key="1">
          <Icon type="pie-chart" />
          <span>Schedule</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="desktop" />
          <span>To-do</span>
        </Menu.Item>
      </Menu>
    </>
  );
};
export default NavMenu;
