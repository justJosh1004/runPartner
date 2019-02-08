import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createRun } from '../../actions';
import RunForm from './RunForm';

class RunCreate extends Component {
  onSubmit = formValues => {
    this.props.createRun(formValues);
  };

  render() {
    return (
      <div>
        <h1>Create a Run</h1>
        <RunForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createRun }
)(RunCreate);
