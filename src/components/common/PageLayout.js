// Imports
import React from "react";
import { Layout } from "antd";

// App Imports
import NavMenu from "./NavMenu";

const { Content, Footer } = Layout;

// Component
const PageLayout = props => {
  return (
    <Layout style={{ minHeight: "80vh" }}>
      <NavMenu />
      <Content style={{ margin: "0 20px" }}>
        <div style={{ padding: 5, background: "#fff", minHeight: "70vh" }}>
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}></Footer>
    </Layout>
  );
};

export default PageLayout;
