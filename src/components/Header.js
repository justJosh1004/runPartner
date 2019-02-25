import React from 'react';
import { Link } from 'react-router-dom';

import Auth from './Auth';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <span className="navbar-brand">AktivPal</span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarHeader"
        aria-controls="navbarHeader"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarHeader">
        <div className="navbar-nav p-2">
          <Link to="/" className="nav-item nav-link">
            Home <span className="sr-only">(current)</span>
          </Link>
          <Link to="/" className="nav-item nav-link">
            About
          </Link>
          <Link to="/runs" className="nav-item nav-link">
            View Runs
          </Link>
        </div>
        <div className="navbar-nav ml-auto p-2">
          <Link to="/" className="nav-item nav-link">
            Profile
          </Link>
          <Auth />
        </div>
      </div>
    </nav>
  );
};

export default Header;
