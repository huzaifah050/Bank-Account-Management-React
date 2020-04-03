import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="nav-wrapper grey darken-4">
        <div className="container">
          <a href="#" className="brand-logo center">
            BOH
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {/* <li>
              <Link to="/newaccount">Add New Account</Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
