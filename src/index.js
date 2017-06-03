import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import Property from './Property/Property';
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/property/:name" component={Property} />
    </div>
  </Router>
  , document.getElementById('root'));

registerServiceWorker();
