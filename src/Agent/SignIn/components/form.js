import React from 'react';
import axios from 'axios';
import './SignIn.css';
import { bindActionCreators } from 'redux';
import { connect } from  'react-redux';


import { getJwt } from 'Helpers/Helpers';
import { userLogIn }  from '../../../Actions/user_session_action';


class Form extends React.Component {
  submitForm(event) {
    event.preventDefault();
    this.props.userLogIn(this.email.value, this.password.value);
  }

  render() {
    return(
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <form onSubmit={this.submitForm.bind(this)} className="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon" />
                  <input autoFocus ref={input => this.email = input} type="email" name="email" placeholder="Email"/>
                </div>
              </div>

              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon" />
                  <input ref={input => this.password = input} type="password" name="password" placeholder="Password"/>
                </div>
              </div>
            </div>

            <button type="submit" className="ui fluid large submit button teal">
              Log in
            </button>
          </form>

        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    userLogIn
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(Form);
