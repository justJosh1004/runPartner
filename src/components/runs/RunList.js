import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import ReactMapGL, { Marker } from 'react-map-gl';
import {
  // Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Container,
  Row,
  Col
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

import { fetchRuns, deleteRun, toggleModal } from '../../actions';
import { TOKEN } from '../../apis/mapsToken';
import '../../styles/styles.css';

class RunList extends Component {
  componentDidMount() {
    this.props.fetchRuns();
  }

  toggleModal = () => {
    this.props.toggleModal(!this.props.isOpen);
  };

  runDelete = id => {
    this.props.deleteRun(id);
    this.toggleModal();
  };

  renderDeleteModal = run => {
    const { name, miles, location, id } = _.find(this.props.runs, { id: run });
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>{name}</ModalHeader>
        <ModalBody>
          <p>
            {miles} mile run at {location.name}.
          </p>
          Are you sure you want to delete this run?
        </ModalBody>
        <ModalFooter>
          <Button onClick={this.toggleModal} color="primary">
            Cancel
          </Button>
          <Button color="danger" onClick={() => this.runDelete(id)}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    );
  };

  renderActions(run) {
    if (run.userId === this.props.currentUserId) {
      return (
        <div>
          <Link to={`/runs/edit/${run.id}`}>
            <Button color="info" className="button-fix">
              Edit
            </Button>
          </Link>
          <Button
            type="button"
            onClick={this.toggleModal}
            color="danger"
            className="button-fix"
          >
            Delete
          </Button>
          {this.renderDeleteModal(run.id)}
        </div>
      );
    } else {
      return (
        <div>
          <Link to={`/runs/${run.id}`}>
            <Button color="primary" className="button-fix">
              View
            </Button>
          </Link>
          <Button color="success" className="button-fix">
            Join
          </Button>
        </div>
      );
    }
  }

  renderMap(run) {
    if (run.lat) {
      return (
        <CardBody>
          <h4>Location: {run.location}</h4>
          <ReactMapGL
            mapboxApiAccessToken={TOKEN}
            width={'100%'}
            height={300}
            latitude={run.lat}
            longitude={run.lng}
            zoom={15}
          >
            <Marker latitude={run.lat} longitude={run.lng}>
              <FontAwesomeIcon icon={faMapMarker} />
            </Marker>
          </ReactMapGL>
        </CardBody>
      );
    }
    return <CardBody>Host did not choose a location.</CardBody>;
  }

  renderRun() {
    return this.props.runs.map(run => {
      return (
        <Card key={run.id} style={{ marginBottom: '20px' }}>
          <CardHeader>
            <h3>{run.name}</h3>
          </CardHeader>
          <Container>
            <Row>
              <Col lg={6}>
                <CardBody>
                  <Row>
                    <Col md="3">Host: </Col>
                    <Col md="9">{run.owner}</Col>
                  </Row>
                  <Row>
                    <Col md="3">Miles: </Col>
                    <Col md="9">{run.miles}</Col>
                  </Row>
                  <Row>
                    <Col md="3">Pace: </Col>
                    <Col md="9">the pace</Col>
                  </Row>
                  <Row>
                    <Col md="3">Time: </Col>
                    <Col md="9">{run.startTime}</Col>
                  </Row>
                  <Row>
                    <Col md="3">Date: </Col>
                    <Col md="9">{run.date}</Col>
                  </Row>
                </CardBody>
              </Col>
              <Col lg={6}>{this.renderMap(run)}</Col>
            </Row>
          </Container>
          <CardFooter className="text-right">
            {this.renderActions(run)}
          </CardFooter>
        </Card>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="row justify-content-between">
          <h2 className="col-4">Runs</h2>
          <Link to={`/runs/create`} className="btn btn-outline-dark col-3">
            Create A Run
          </Link>
        </div>
        <br />
        {this.renderRun()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    runs: Object.values(state.runs),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
    isOpen: state.modal.isOpen
  };
}

export default connect(
  mapStateToProps,
  { fetchRuns, deleteRun, toggleModal }
)(RunList);
