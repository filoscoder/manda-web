// Imports
import React, { useState } from "react";
import { Link } from "react-router-dom";
// App Imports
import NavMenu from "./NavMenu";

// Import ant-design
import { Layout } from "antd";

const { Sider, Header, Content } = Layout;

// Component
const PageLayout = props => {
  // initialize
  const [collapseSider, setCollapseSider] = useState(true);

  return (
    <Layout style={{ minHeight: "70vh", height: "100%" }}>
      <Header>
        <Link to="/">
          <div>LOGO</div>
        </Link>
      </Header>
      <Layout>
        <Sider
          collapsible
          collapsed={collapseSider}
          onCollapse={() => setCollapseSider(!collapseSider)}
          collapsedWidth={60}
          theme={props.pageTheme}
        >
          <NavMenu
            menuTheme={props.pageTheme}
            menuMode={"inline"}
            menuInLineIndent={24}
            item1={"Inicio"}
            itemIcon1={"home"}
            item2={"Calendario"}
            itemIcon2={"calendar"}
            item3={"Tareas"}
            itemIcon3={"bars"}
          />
        </Sider>
        <Content style={{ margin: "5px 15px" }}>
          <div
            style={{
              padding: 5,
              background: "#ffff",
              minHeight: "88vh"
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
