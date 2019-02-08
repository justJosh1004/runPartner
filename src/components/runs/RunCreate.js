import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createRun } from '../../actions';
import RunForm from './RunForm';

class RunCreate extends Component {
  render() {
    return (
      <div>
        <h1>Create a Run</h1>
        <RunForm />
      </div>
    );
  }
}

export default connect(
  null,
  { createRun }
)(RunCreate);
