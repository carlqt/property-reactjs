import React from 'react';
import { Link } from 'react-router-dom'

const Item = () => {
  return(
      <div className="card">
        <Link to="/property/sophia" className="image">
          <img alt="img" src="images/img.png"/>
        </Link>
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
