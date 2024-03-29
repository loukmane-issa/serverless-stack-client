import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/Home';
import NotFound from './containers/NotFound';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      { /* Finally, catch all unmatched routes */ }
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
