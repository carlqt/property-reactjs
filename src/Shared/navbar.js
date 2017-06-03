import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Navbar = () => {
  return(
    <div className="red ui inverted menu">
      <Link to="/" className="item">
        <img src={logo} />
        PropertyKing
      </Link>
    </div>
  )
}

export default Navbar;