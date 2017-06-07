import 'semantic-ui/dist/semantic.css';
import './App.css';
import React, { Component } from 'react';

import Navbar from '../Shared/navbar';
import Routes from '../Routes';

class App extends Component {
  render() {
    return (
      <div className = "App" >
        <Navbar / >
        <Routes />
      </div>
    );
  }
}

export default App;