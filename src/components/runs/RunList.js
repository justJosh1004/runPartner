import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRuns } from '../../actions';
import { Table, Button } from 'reactstrap';

import '../../styles/styles.css';

class RunList extends Component {
  componentDidMount() {
    this.props.fetchRuns();
  }

  renderActions(run) {
    if (run.userId === this.props.currentUserId) {
      return (
        <div>
          <Button color="info" className="button-fix">
            <Link to={`/runs/edit/${run.id}`} className="button-link">
              Edit
            </Link>
          </Button>
          <Button color="danger" className="button-fix">
            <Link to={`/runs/delete/${run.id}`} className="button-link">
              Delete
            </Link>
          </Button>
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
    console.log(this.props.runs);
    return this.props.runs.map((run, i) => {
      return (
        <tr key={run.id} className="table-align">
          <th className="table-align" scope="row">
            {run.owner}
          </th>
          <td>{run.location}</td>
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
        <Table striped hover>
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
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    runs: Object.values(state.runs),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
}

export default connect(
  mapStateToProps,
  { fetchRuns }
)(RunList);
