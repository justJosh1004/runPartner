import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRuns } from '../../actions';

class RunList extends Component {
  componentDidMount() {
    this.props.fetchRuns();
  }

  renderList() {
    return this.props.runs.map((run, i) => {
      return (
        <tr key={run.id}>
          <th scope="row">{run.owner}</th>
          <td>{run.type}</td>
          <td>{run.location}</td>
          <td>{run.startTime}</td>
          <td>pace</td>
          <td>{run.miles}</td>
          <td>{run.date}</td>
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
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Organizer</th>
              <th scope="col">Type</th>
              <th scope="col">Location</th>
              <th scope="col">Start Time</th>
              <th scope="col">Pace</th>
              <th scope="col">Miles</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>{this.renderList()}</tbody>
        </table>
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
