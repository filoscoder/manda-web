// Imports
import React from "react";
import { Route, Switch, Link } from "react-router-dom";
// App imports
import ButtonBase from "./common/ButtonBase";
// Import ant-design
import "antd/dist/antd.css";
import { Result } from "antd";

// App Imports
import { routes } from "../setup/routes";
import PageLayout from "./common/PageLayout";
import Schedule from "./schedule/Schedule";
import Home from "./home/Home";
import Todos from "./home/Todos";

// Component
const App = () => (
  <PageLayout pageTheme={"dark"}>
    <Switch>
      {/* Common */}
      <Route path={routes.todos} exact component={Todos} />
      <Route path={routes.schedule} exact component={Schedule} />
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
  </PageLayout>
);

export default App;
