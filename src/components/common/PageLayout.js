// Imports
import React, { useState } from "react";
import { Link } from "react-router-dom";
// App Imports
import NavMenu from "./NavMenu";
import ButtonBase from "./ButtonBase";
import { Auth } from "../../setup/firebase";

// Import ant-design
import { Layout } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
const { Sider, Header, Content, message } = Layout;

// Component
const PageLayout = (props) => {
  // initialize
  const [collapseSider, setCollapseSider] = useState(true);
  const [isLoading, setLoading] = useState(false);

  const handleLogOut = (e) => {
    setLoading(true);
    console.log(e.target.value);

    setTimeout(() => {
      Auth.signOut().catch((error) => {
        // Handle Errors here.
        console.log("!Error[LOG-OUT] => ", error);
        message.error(error.message);
        setLoading(false);
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ display: "block" }}>
        <div style={{ float: "left" }}>
          <Link to="/">
            <div>LOGO</div>
          </Link>
        </div>
        <div style={{ float: "right" }}>
          <ButtonBase
            tooltip="See you soon!"
            // btnText="Logout"
            btntype="danger"
            btnsize="small"
            btnshape="default"
            onClick={handleLogOut}
            loading={isLoading}
          >
            <LogoutOutlined />
          </ButtonBase>
        </div>
      </Header>
      <Layout>
        <Sider
          collapsible
          collapsed={collapseSider}
          onCollapse={() => setCollapseSider(!collapseSider)}
          collapsedWidth={63}
          theme={props.pageTheme}
        >
          <NavMenu
            menuTheme={props.pageTheme}
            menuMode={"inline"}
            menuInLineIndent={17}
            item1={"Inicio"}
            item2={"Calendario"}
            item3={"Tareas"}
          />
        </Sider>
        <Content style={{ margin: "0px" }}>
          <div
            style={{
              padding: 0,
              background: "#ffff",
              minHeight: "92vh",
            }}
          >
            {props.children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
