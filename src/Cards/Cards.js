import React, { Component } from 'react';

import Item from './components/item';

class Cards extends Component {
  render() {
    let cards = [];
    for (var i = 0; i < 5; i++) {
      cards.push(<Item key={i} />)
    };

    return (
      <div>
        <div className="item-container ui cards" >
            {cards}
        </div>
      </div>
    );
  }
}

export default Cards;