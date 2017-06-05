import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App/App';
import Property from './Property/Property';
import Upload from './Upload/Index';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/property/:name" component={Property} />
      <Route exact path="/property_upload" component={Upload} />
    </div>
  </Router>
  , document.getElementById('root'));

registerServiceWorker();
