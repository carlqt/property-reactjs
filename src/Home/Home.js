import './Home.css'
import React from 'react';

class Home extends React.Component {
  render() {
    return(
      <div>
        <div className="ui inverted vertical masthead center aligned segment">

          <div className="ui container">
            {/*<div className="ui large secondary inverted pointing menu">
              <a class="toc item">
                <i className="sidebar icon"></i>
              </a>
              <a className="active item">Home</a>
              <a className="item">Work</a>
              <a className="item">Company</a>
              <a className="item">Careers</a>
              <div className="right item">
                <a className="ui inverted button">Log in</a>
                <a className="ui inverted button">Sign Up</a>
              </div>
            </div>*/}
          </div>

          <div className="ui text container">
            <h1 className="ui inverted header">
              Imagine-a-Company
            </h1>
            <h2>That will help you find your new home</h2>
            <div className="ui big fluid icon input">
              <input type="text" placeholder="Search"/>
              <i className="search icon"/>
            </div>
          </div>

        </div>
        <div className="ui vertical stripe segment">
          <div className="ui middle aligned stackable grid container">
            <div className="row">
              <div className="eight wide column">
                <h3 className="ui header">We Help Companies and Companions</h3>
                <p>We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs...through pure data analytics.</p>
                <h3 class="ui header">We Make Bananas That Can Dance</h3>
                <p>Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.</p>
              </div>
              <div className="six wide right floated column">
                <img src="assets/images/wireframe/white-image.png" className="ui large bordered rounded image"/>
              </div>
            </div>
            <div className="row">
              <div className="center aligned column">
                <a className="ui huge button">Check Them Out</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;