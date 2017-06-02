import 'semantic-ui/dist/semantic.css';
import './App.css';
import React, { Component } from 'react';

import logo from './logo.svg';

class App extends Component {
  render() {
    const imgPath = "./images/mactan.png";
    return (
      <div className="App">
        <div className="red ui inverted menu">
          <a className="item">
            <img src={logo} />
            Lagalag
          </a>
        </div>

        <div className="ui card">
          <div className="content">
            <div className="right floated meta">14h</div>
            <img className="ui avatar image" src="./images/mactan.png"/> Elliot
          </div>
          <div className="image">
            <img src="images/mactan.png"/>
          </div>
          <div className="content">
            <span className="right floated">
              <i className="heart outline like icon"></i>
              17 likes
            </span>
            <i className="comment icon"></i>
            3 comments
          </div>
          <div className="extra content">
            <div className="ui large transparent left icon input">
              <i className="heart outline icon"></i>
              <input type="text" placeholder="Add Comment..."/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
