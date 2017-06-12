import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from  'react-redux';

class AuthRoute extends React.Component {
  constructor(props) {
    super(props);

    this.authenticated = this.authenticated.bind(this);
  }

  authenticated() {
    const { user } = this.props;
    return user.get("authenticated");
  }

  render() {
    return(
      <div>
        {this.authenticated() ? this.props.children : <Redirect to={this.props.back}/> }
      </div>
    )
  }
}


function mapStateToProps(state) {
  return{
    user: state.user,
  }
}

export default connect(mapStateToProps, null)(AuthRoute);