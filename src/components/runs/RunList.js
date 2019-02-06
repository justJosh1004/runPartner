import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {};
}

class RunList extends Component {
  render() {
    return (
      <div>
        <h1>These are the runs</h1>
        <p>A run</p>
        <p>A run</p>
        <p>A run</p>
        <p>A run</p>
        <p>A run</p>
      </div>
    );
  }
}

export default connect(mapStateToProps)(RunList);
