import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" exac component={Dashboard} />
      <Route path="/repository" exact component={Repository} />
    </Switch>
  </Router>
);

export default Routes;
