import React from 'react';

const Item = () => {
  return(
    <div className="card">
      <div className="image">
        <img src="images/mactan.png"/>
      </div>
      <div className="content">
        <span className="right floated">
          <i className="heart outline like icon"></i>
          17 likes
        </span>
        Sophia Flats
      </div>
      <div className="extra content">
        <i className="image icon"/>
        22
      </div>
    </div>
  )
}

export default Item
