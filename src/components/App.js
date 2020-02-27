// Imports
import React from "react";
import "antd/dist/antd.css";
import { Route, Switch } from "react-router-dom";

// App Imports
import { routes } from "../setup/routes";
import PageLayout from "./common/PageLayout";
import Schedule from "./schedule/Schedule";
import About from "./home/About";

// Component
const App = () => (
  <PageLayout>
    <Switch>
      {/* Common */}
      <Route path={routes.schedule} component={Schedule} exact />
      <Route path={routes.todo} component={About} />

      {/* Thoughts */}
      {/* <Route path={routes.thoughts.list} component={ThoughtsList} exact/>
      <Route path={routes.thoughts.create} component={ThoughtsCreate}/>
      <Route path={routes.thoughts.view(':id')} component={ThoughtsView}/> */}
    </Switch>
  </PageLayout>
);

export default App;
