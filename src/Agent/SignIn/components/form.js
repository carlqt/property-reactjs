import React from 'react';
import axios from 'axios';
import './SignIn.css';

import { getJwt } from 'Helpers/Helpers';


class Form extends React.Component {
  submitForm(event) {
    event.preventDefault()
    const url = "http://localhost:8000/api/admin/sign_in"

    axios.post(url, {
      password: this.password.value,
      email: this.email.value
    }).then((resp) => {
      localStorage.setItem("jwt", resp.data.token)
    }).catch((resp) => {
      console.log(resp)
    })
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

export default Form;