// Imports
import React from "react";
import { Route, Switch } from "react-router-dom";
// App imports
import LogIn from "../components/common/LogIn";
import SignUp from "../components/common/SignUp";
import NotFoundPage from "../components/common/NotFoundPage";
import Schedule from "../components/schedule/Schedule";
import Home from "../components/home/Home";
import Todos from "../components/home/Todos";
import PrivateRoute from "../helpers/PrivateRoute";
import { AuthProvider } from "../helpers/Auth";
import { routes } from "./routes";

const Router = () => {
  return (
    <Switch>
      {/* Common */}
      <AuthProvider>
        <Route exact sensitive path={routes.signup} component={SignUp} />
        <Route exact sensitive path={routes.login} component={LogIn} />
        <PrivateRoute exact sensitive path={routes.todos} component={Todos} />
        <PrivateRoute
          exact
          sensitive
          path={routes.schedule}
          component={Schedule}
        />
        <PrivateRoute exact sensitive path={routes.home} component={Home} />
        <Route path="/404" component={NotFoundPage} />
      </AuthProvider>
    </Switch>
  );
};

export default Router;
