import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
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
        <div className="navbar-nav">
          <Link to="/" className="nav-item nav-link active">
            Home <span className="sr-only">(current)</span>
          </Link>
          <Link to="/" className="nav-item nav-link">
            About
          </Link>
          <Link to="/runs" className="nav-item nav-link">
            View Runs
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
