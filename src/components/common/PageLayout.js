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
          style={{ height: "90vh" }}
        >
          <NavMenu />
        </Sider>
        <Content style={{ margin: "5px 15px" }}>
          <div
            style={{
              alignContent: "center",
              padding: 5,
              background: "#fff",
              minHeight: "86vh"
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
