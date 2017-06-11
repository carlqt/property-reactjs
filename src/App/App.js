import 'semantic-ui/dist/semantic.css';
import './App.css';
import React, { Component } from 'react';
import { connect } from  'react-redux';
import { withRouter } from 'react-router-dom';

import Navbar from '../Shared/navbar';
import Routes from '../Routes';

class App extends Component {
  render() {
    return (
      <div className = "App" >
        <Navbar />
        <Routes />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    user: state.user,
  }
}

export default withRouter(connect(mapStateToProps, null)(App));