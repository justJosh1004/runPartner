import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Spinner } from 'reactstrap';

import { fetchRun, editRun } from '../../actions';
import RunForm from './RunForm';

class RunEdit extends Component {
  componentDidMount() {
    this.props.fetchRun(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editRun(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.run) {
      return (
        <div className="d-flex justify-content-center align-items-center">
          <Spinner type="grow" color="dark" />
          <Spinner type="grow" color="dark" />
          <Spinner type="grow" color="dark" />
          <Spinner type="grow" color="dark" />
          <Spinner type="grow" color="dark" />
        </div>
      );
    }

    return (
      <div>
        <h3>Edit Run</h3>
        <RunForm
          initialValues={_.pick(
            this.props.run,
            'name',
            'location',
            'startStime',
            'date',
            'miles',
            'pace',
            'type'
          )}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    run: state.runs[ownProps.match.params.id]
  };
}

export default connect(
  mapStateToProps,
  { fetchRun, editRun }
)(RunEdit);
