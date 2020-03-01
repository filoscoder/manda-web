// Imports
import React from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

// App Imports

// Component
const NavMenu = props => {
  return (
    <>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="horizontal">
        <Menu.Item key="1">
          <Link to="/" exact>
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
