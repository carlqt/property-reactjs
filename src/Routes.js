import { Route, Switch } from 'react-router-dom';

import React from 'react';
import Property from './Property/Property';
import Upload from './Upload/Index';
import Cards from './Cards/Cards';
import AgentSignIn from './Agent/SignIn/SignIn';
import Protected from './Agent/Protected';

export default () => (
  <Switch>
    <Route exact path="/" component={Cards} />
    <Route exact path="/property/:name" component={Property} />
    <Route exact path="/property_upload" component={Upload} />
      <Route exact path="/agent/sign_in" component={AgentSignIn} />
      <Route exact path="/agent/protected" component={Protected} />
  </Switch>
)