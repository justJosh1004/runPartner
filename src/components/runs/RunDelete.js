import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { fetchRun, deleteRun } from '../../actions';

class RunDelete extends Component {
  componentDidMount() {
    this.props.fetchRun(this.props.match.params.id);
  }

  render() {
    return <Modal />;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    run: state.runs[ownProps.match.params.id]
  };
}

export default connect(
  mapStateToProps,
  { fetchRun, deleteRun }
)(RunDelete);
