import React, { Component } from 'react';
import Form from './components/form';
import { connect } from  'react-redux';

class SignIn extends Component {
  render() {
    console.log(this.props.user.toJS());
    return(
      <div>
        <Form />
      </div>
    )
  }
}


function mapStateToProps(state) {
  return{
    user: state.user,
  }
}

export default connect(mapStateToProps, null)(SignIn);