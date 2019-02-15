import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions';

class Auth extends Component {
  componentDidMount() {
    this.props.signIn(1);
  }

  onSignInClick = () => {
    this.props.signIn(1);
  };

  onSignOutClick = () => {
    this.props.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="btn btn-danger">
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="btn btn-primary">
          Sign In
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    isSignedIn: state.auth.isSignedIn
  };
}

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(Auth);
