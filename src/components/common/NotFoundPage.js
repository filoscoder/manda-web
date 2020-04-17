import React from "react";
import { Link } from "react-router-dom";

// App imports
import ButtonBase from "../common/ButtonBase";

// Import ant-design
import { Result } from "antd";

const NotFoundPage = (props) => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link to="/">
          <ButtonBase
            tooltip="Back to home"
            btntype="primary"
            btntext="Back Home"
          />
        </Link>
      }
    />
  );
};

export default NotFoundPage;
