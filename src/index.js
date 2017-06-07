import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App/App';
import Property from './Property/Property';
import Upload from './Upload/Index';
import AgentSignIn from './Agent/SignIn/SignIn';
import Protected from './Agent/Protected';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/property/:name" component={Property} />
      <Route exact path="/property_upload" component={Upload} />
      <Route exact path="/agent/sign_in" component={AgentSignIn} />
      <Route exact path="/agent/protected" component={Protected} />
    </div>
  </Router>
  , document.getElementById('root'));

registerServiceWorker();
