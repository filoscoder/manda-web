// Imports
import React from "react";
import { Route, Switch } from "react-router-dom";

// App Imports
import { routes } from "../setup/routes";
import PageLayout from "./common/PageLayout";
import Home from "./home/Home";
import About from "./home/About";

// Component
const App = () => (
  <PageLayout>
    <Switch>
      {/* Common */}
      <Route path={routes.home} component={Home} exact />
      <Route path={routes.about} component={About} />

      {/* Thoughts */}
      {/* <Route path={routes.thoughts.list} component={ThoughtsList} exact/>
      <Route path={routes.thoughts.create} component={ThoughtsCreate}/>
      <Route path={routes.thoughts.view(':id')} component={ThoughtsView}/> */}
    </Switch>
  </PageLayout>
);

export default App;
