import React from "react";
import { Spin } from "antd";

const Loading = props => {
  const showStyle = {
    textAlign: "center",
    background: "rgba(0, 0, 0, 0.01)",
    borderRadius: "4px",
    marginTop: "80px",
    marginBottom: "20px",
    padding: "30px 50px"
  };
  return (
    <div style={props.isLoading ? showStyle : { textAlign: "center" }}>
      <Spin tip="Loading..." size="large" spinning={props.isLoading}>
        {props.children}
      </Spin>
    </div>
  );
};

export default Loading;
