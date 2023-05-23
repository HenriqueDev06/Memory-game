import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { GamePage, Home } from "../pages";

const Routes: FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/game" exact component={GamePage} />
    </Switch>
  );
};

export default Routes;
