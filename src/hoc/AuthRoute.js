import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from  'react-redux';

class AuthRoute extends React.Component {
  constructor(props) {
    super(props);

    this.authenticated = this.authenticated.bind(this);
  }

  authenticated() {
    // Check for the token here
    // If token does not exists, return false
    // If token exists, check if it is also in the redux state
    //  > if token is not in the redux state, validate token in the server
    //    > If validation failed, return false else return true and store in redux state
    // If token exists in redux state as well, return true
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
// export default AuthRoute;