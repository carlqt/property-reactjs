import React from 'react';
import logo from '../../logo.svg';

const Navbar = () => {
  return(
    <div className="red ui inverted menu">
      <a className="item">
        <img src={logo} />
        PropertyKing
      </a>
    </div>
  )
}

export default Navbar