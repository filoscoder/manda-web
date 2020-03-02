// Imports
import React from "react";

// Import ant-design
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

// Component
const NavMenu = props => {
  return (
    <>
      <Menu theme="dark" defaultSelectedKeys={["2"]} mode="inline">
        <Menu.Item key="1">
          <Link to="/">
            <Icon type="home" />
            <span>Inicio</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/schedule">
            <Icon type="calendar" />
            <span>Calendario</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/todos">
            <Icon type="bars" />
            <span>Tareas</span>
          </Link>
        </Menu.Item>
      </Menu>
    </>
  );
};
export default NavMenu;
