// Imports
import React from "react";

// Import ant-design
import { Tooltip, Button } from "antd";

// Component
const ButtonBase = (props) => {
  return (
    <Tooltip title={props.tootltip}>
      <Button
        type={props.btntype}
        size={props.btnsize}
        block={props.btnblock}
        shape={props.btnshape}
        style={props.btnstyle}
        {...props}
      >
        {props.btntext}
        {props.children}
      </Button>
    </Tooltip>
  );
};

ButtonBase.defaultProps = {
  btntype: "default",
  btnsize: "default",
  btnblock: "false",
  btntext: undefined,
  btnshape: "",
};

export default ButtonBase;
