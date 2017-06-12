import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Navbar = (props) => {
  const SessionButton = ({authenticated}) => {
    if (authenticated) {
      return <a onClick={props.onSignOut.bind(this)} className="ui item active">Sign Out</a>;
    } else {
      return <Link to="/agent/sign_in" className="ui item active">Sign In</Link>;
    }
  }

  return(
    <div className="red ui inverted menu">
      <Link to="/" className="item">
        <img src={logo} alt="logo" />
        PropertyKing
      </Link>

      <Link to="/property_upload" className="item">
        Upload
      </Link>

      <div className="right menu">
        { SessionButton(props) }
      </div>
    </div>
  )
}

export default Navbar;