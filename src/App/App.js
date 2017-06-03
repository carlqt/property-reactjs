import 'semantic-ui/dist/semantic.css';
import './App.css';
import React, { Component } from 'react';

import Navbar from '../Shared/navbar';
import Item from './components/item';

class App extends Component {
  render() {
    let cards = [];
    for (var i = 0; i < 5; i++) {
      cards.push(<Item />)
    };

    return (
      <div className = "App" >

        <Navbar / >

        <div className="item-container ui cards" >
            {cards}
        </div>

      </div>
    );
  }
}

export default App;