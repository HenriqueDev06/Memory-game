import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../pages';


const Routes: FC = () => {
  

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      
    </Switch>
  );
};

export default Routes;
