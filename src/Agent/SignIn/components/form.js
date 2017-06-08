import React from 'react';

class Form extends React.Component {
  render() {
    return(
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <form className="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon" />
                  <input type="email" name="email" placeholder="Email"/>
                </div>
              </div>

              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon" />
                  <input type="text" name="password" placeholder="Password"/>
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