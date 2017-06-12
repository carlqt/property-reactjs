import 'semantic-ui/dist/semantic.css';
import './App.css';
import React, { Component } from 'react';
import { connect } from  'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import Navbar from '../Shared/navbar';
import Routes from '../Routes';
import { is_authenticated } from 'Helpers/Helpers';
import { userLogOut } from '../Actions/user_session_action';

class App extends Component {
  render() {
    const { userLogOut } = this.props;
    return (
      <div className = "App" >
        <Navbar onSignOut={userLogOut} authenticated={is_authenticated()} />
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


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    userLogOut
  }, dispatch);
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));