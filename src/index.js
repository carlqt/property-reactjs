import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
    </div>
  </Router>
  , document.getElementById('root'));

registerServiceWorker();
