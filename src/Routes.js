import { Route, Switch } from 'react-router-dom';

import React from 'react';
import Property from './Property/Property';
import Upload from './Upload/Index';
import Cards from './Cards/Cards';
import Home from './Home/Home';
import AgentSignIn from './Agent/SignIn/SignIn';
import Protected from './Agent/Protected';
import SuperProtected from './Agent/superprotected';
import AuthRoute from './hoc/AuthRoute';
import { AgentRoot } from './Agent/Root/Root';

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/cards" component={Cards} />
    <Route exact path="/property/:name" component={Property} />
    <Route exact path="/property_upload" component={Upload} />
    <Route exact path="/agent/sign_in" component={AgentSignIn} />
    <AuthRoute back={"/agent/sign_in"}>
      <Route exact path="/agent" component={AgentRoot} />
      <Route exact path="/agent/protected" component={Protected} />
      <Route exact path="/agent/superprotected" component={SuperProtected} />
    </AuthRoute>
  </Switch>
)
