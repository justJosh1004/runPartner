import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {};
}

class Home extends Component {
  render() {
    return (
      <div>
        <h1>This is the homepage!</h1>
        <h3>Look at Runs</h3>
        <h3>Go to Profile</h3>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
