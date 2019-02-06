import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(RunList);
