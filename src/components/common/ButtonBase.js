// Imports
import React from "react";

// Import ant-design
import { Tooltip, Button, Icon } from "antd";

// Component
const ButtonBase = props => {
  return (
    <Tooltip title={props.tootltip}>
      <Button
        type={props.btnType}
        size={props.btnSize}
        block={props.btnBlock}
        shape={props.btnShape}
        style={props.btnStyle}
      >
        {props.btnText}
        {props.iconType ? (
          <Icon type={props.iconType}>{props.iconText}</Icon>
        ) : (
          ""
        )}
      </Button>
    </Tooltip>
  );
};

ButtonBase.defaultProps = {
  btnType: "default",
  btnSize: "default",
  btnBlock: false,
  btnText: null,
  iconText: null
};

export default ButtonBase;
