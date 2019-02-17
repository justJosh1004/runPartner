import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            <Button>Go To Runs</Button>
          </CardBody>
        </Card>
        <Card className="text-center">
          <CardHeader>Create A Run</CardHeader>
          <CardBody>
            <Button>Add A Run</Button>
          </CardBody>
        </Card>
      </CardDeck>
    );
  }
}

export default connect(mapStateToProps)(Home);
