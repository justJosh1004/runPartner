import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card, CardDeck, CardBody, CardHeader } from 'reactstrap';

function mapStateToProps(state) {
  return {};
}

class Home extends Component {
  render() {
    return (
      <CardDeck>
        <Card className="text-center">
          <CardHeader>Look At My Profile</CardHeader>
          <CardBody>
            <Button>Go To Profile</Button>
          </CardBody>
        </Card>
        <Card className="text-center">
          <CardHeader>Look At Runs</CardHeader>
          <CardBody>
            <Link to="/runs">
              <Button>Go To Runs</Button>
            </Link>
          </CardBody>
        </Card>
        <Card className="text-center">
          <CardHeader>Create A Run</CardHeader>
          <CardBody>
            <Link to="/runs/create">
              <Button>Add A Run</Button>
            </Link>
          </CardBody>
        </Card>
      </CardDeck>
    );
  }
}

export default connect(mapStateToProps)(Home);
