// Imports
import React from "react";
import { Route, Switch, Link } from "react-router-dom";
// App imports
import ButtonBase from "./components/common/ButtonBase";
import LogIn from "./components/common/LogIn";
import SignUp from "./components/common/SignUp";
import Schedule from "./components/schedule/Schedule";
import Home from "./components/home/Home";
import Todos from "./components/home/Todos";
import { routes } from "./setup/routes";
// Import ant-design
import { Result } from "antd";

const Router = () => {
  return (
    <Switch>
      {/* Common */}
      <Route path={routes.todos} exact component={Todos} />
      <Route path={routes.schedule} exact component={Schedule} />
      <Route path={routes.signup} exact component={SignUp} />
      <Route path={routes.login} exact component={LogIn} />
      <Route path={routes.home} exact component={Home} />
      <Route>
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={
            <Link to="/">
              <ButtonBase
                tooltip="Back to home"
                btnType="primary"
                btnText="Back Home"
              />
            </Link>
          }
        />
      </Route>
    </Switch>
  );
};

export default Router;
