import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./container/Home";
import NotFound from "./container/NotFound";
import Login from "./container/Login";
import AppliedRoute from "./components/AppliedRoute";
import Signup from "./container/Signup";
import NewNote from "./container/NewNote";
import Notes from "./container/Notes";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default ({ childProps }) => (
  <Switch>
    <UnauthenticatedRoute
      path="/login"
      exact
      component={Login}
      props={childProps}
    />
    <UnauthenticatedRoute
      path="/signup"
      exact
      component={Signup}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/notes/new"
      exact
      component={NewNote}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/notes/:id"
      exact
      component={Notes}
      props={childProps}
    />

    <AppliedRoute path="/" exact component={Home} props={childProps} />
    {/* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
);
