import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { GamePage } from "../pages";

const Routes: FC = () => {
  return (
    <Switch>
      <Route path="/game" exact component={GamePage} />
    </Switch>
  );
};

export default Routes;
