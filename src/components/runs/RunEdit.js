import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchRun, editRun } from '../../actions';
import RunForm from './RunForm';

class RunEdit extends Component {
  componentDidMount() {
    this.props.fetchRun(this.props.match.params.id);
  }

  render() {
    if (!this.props.run) {
      return <div>Loading...</div>;
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
