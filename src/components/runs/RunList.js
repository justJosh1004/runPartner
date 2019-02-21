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
          <Button color="info" className="button-fix">
            <Link to={`/runs/edit/${run.id}`} className="button-link">
              Edit
            </Link>
          </Button>
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
          <Button color="primary" className="button-fix">
            <Link to={`/runs/${run.id}`} className="button-link">
              View
            </Link>
          </Button>
          <Button color="success" className="button-fix">
            Join
          </Button>
        </div>
      );
    }
  }

  renderList() {
    return this.props.runs.map((run, i) => {
      console.log(run);
      return (
        <tr key={run.id} className="table-align">
          <th className="table-align" scope="row">
            {run.owner}
          </th>
          <td>{run.location.name}</td>
          <td>{run.startTime}</td>
          <td>pace</td>
          <td>{run.miles}</td>
          <td>{run.type}</td>
          <td>{run.date}</td>
          <td>{this.renderActions(run)}</td>
        </tr>
      );
    });
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
              <Col lg={6}>
                <CardBody>
                  <h4>Location: {run.location.name}</h4>
                  <ReactMapGL
                    mapboxApiAccessToken={TOKEN}
                    width={'100%'}
                    height={300}
                    latitude={run.location.lat}
                    longitude={run.location.lng}
                    zoom={15}
                  >
                    <Marker
                      latitude={run.location.lat}
                      longitude={run.location.lng}
                    >
                      <FontAwesomeIcon icon={faMapMarker} />
                    </Marker>
                  </ReactMapGL>
                </CardBody>
              </Col>
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
        {/* <Table striped hover>
          <thead>
            <tr>
              <th scope="col">Organizer</th>
              <th scope="col">Location</th>
              <th scope="col">Start Time</th>
              <th scope="col">Pace</th>
              <th scope="col">Miles</th>
              <th scope="col">Type</th>
              <th scope="col">Date</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>{this.renderList()}</tbody>
        </Table> */}
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
