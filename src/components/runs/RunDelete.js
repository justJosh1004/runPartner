import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { fetchRun, deleteRun, toggleModal } from '../../actions';

class RunDelete extends Component {
  componentDidMount() {
    this.props.fetchRun(this.props.match.params.id);
  }

  toggleModal = () => {};

  render() {
    console.log(this.props);
    const { name, miles, location } = this.props.run;
    return (
      <Modal isOpen={this.props.isOpen}>
        <ModalHeader>{name}</ModalHeader>
        <ModalBody>
          <p>
            {miles} mile run at {location}.
          </p>
          Are you sure you want to delete this run?
        </ModalBody>
        <ModalFooter>
          <Link to="/runs">
            <Button color="primary">Cancel</Button>
          </Link>
          <Button color="danger" onClick={this.toggle}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    run: state.runs[ownProps.match.params.id],
    isOpen: state.modal.isOpen
  };
}

export default connect(
  mapStateToProps,
  { fetchRun, deleteRun, toggleModal }
)(RunDelete);
