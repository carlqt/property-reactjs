import './Home.css';
import React from 'react';

import Footer from './components/footer';

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

        <div className="segment-container">
          <div className="popular-segments">
            <div className="title-header centered row">
              <h1>Popular Properties</h1>
            </div>

            <div className="popular-items">
              <img src="http://static2.businessinsider.com/image/5730b8c691058426008c1968/the-21-most-expensive-houses-for-sale-in-the-hamptons.jpg"/>
              <img src="https://i.ytimg.com/vi/T4akqaGDqi4/maxresdefault.jpg" />
              <img src="http://mikecerra.com/wp-content/uploads/2016/12/house-7.jpg" />
            </div>
          </div>
        </div>

        <div className="segment-container">
          <div className="popular-segments">
            <div className="title-header centered row">
              <h1>Popular Properties</h1>
            </div>

            <div className="popular-items">
              <img src="http://static2.businessinsider.com/image/5730b8c691058426008c1968/the-21-most-expensive-houses-for-sale-in-the-hamptons.jpg"/>
              <img src="https://i.ytimg.com/vi/T4akqaGDqi4/maxresdefault.jpg" />
              <img src="http://mikecerra.com/wp-content/uploads/2016/12/house-7.jpg" />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default Home;