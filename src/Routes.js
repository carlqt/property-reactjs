import { Route, Switch } from 'react-router-dom';

import React from 'react';
import Property from './Property/Property';
import Upload from './Upload/Index';
import Cards from './Cards/Cards';

export default () => (
  <Switch>
    <Route exact path="/" component={Cards} />
    <Route exact path="/property/:name" component={Property} />
    <Route exact path="/property_upload" component={Upload} />
  </Switch>
)