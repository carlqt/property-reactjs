import 'semantic-ui/dist/semantic.css';
import './Property.css';
import React, { Component } from 'react';

import Navbar from '../Shared/navbar';

class Property extends Component {
  render() {
    return (
      <div className = "property-section" >

        <div className="gallery-container">
          <div className="item-a">
          </div>

          <div className="item-b">
            <div className="subitem-a" />
            <div className="subitem-b" />
          </div>
        </div>
      </div>
    );
  }
}

export default Property;