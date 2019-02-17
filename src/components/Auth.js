import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import { signIn, signOut } from '../actions';
import '../styles/styles.css';

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
        <Button
          color="danger"
          onClick={this.onSignOutClick}
          className="auth-button"
        >
          Sign Out
        </Button>
      );
    } else {
      return (
        <Button
          color="primary"
          onClick={this.onSignInClick}
          className="auth-button"
        >
          Sign In
        </Button>
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
