import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';

class RunForm extends Component {
  renderInput = ({ input, label, meta, id, placeholder, name, type }) => {
    return (
      <FormGroup>
        <Label for={id}>{label}</Label>
        <Input
          {...input}
          name={name}
          type={type}
          id={id}
          placeholder={placeholder}
        />
      </FormGroup>
    );
  };

  onSubmit = formValues => {
    console.log(formValues);
  };

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          component={this.renderInput}
          name="runName"
          id="theRunName"
          label="Run Name"
          type="text"
          placeholder="Give your run a name"
          defaultValue="Fun Run" // Eventually, maybe do like Strava where default depends on time of day
        />
        <Field
          component={this.renderInput}
          name="runLocation"
          id="theRunLocation"
          label="Run Location"
          type="text"
          placeholder="Where is the run?"
        />
        <Row form>
          <Col md={6}>
            <Field
              component={this.renderInput}
              name="runTime"
              id="theRunTime"
              label="Run Time"
              type="time"
              placeholder="What time is the run?"
            />
          </Col>
          <Col md={6}>
            <Field
              component={this.renderInput}
              name="runDate"
              id="theRunDate"
              label="Run Day"
              type="date"
              placeholder="What day is the run?"
            />
          </Col>
        </Row>
        <Row form>
          <Col md={4}>
            <Field
              component={this.renderInput}
              name="miles"
              id="theMiles"
              label="Miles"
              type="number"
              placeholder="How many miles?"
            />
          </Col>
          <Col md={4}>
            <Field
              component={this.renderInput}
              name="pace"
              id="thePace"
              label="Pace"
              type="text"
              placeholder="what is the pace?"
            />
          </Col>
          <Col md={4}>
            <Field
              component={this.renderInput}
              name="terrain"
              id="theTerrain"
              label="Terrain"
              type="text"
              placeholder="eg. road, trail, hilly, etc"
            />
          </Col>
        </Row>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button color="danger" style={{ marginRight: '10px' }}>
            Cancel
          </Button>
          <Button color="primary">Submit</Button>
        </div>
      </Form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  return errors;
};

export default reduxForm({
  form: 'runForm',
  validate
})(RunForm);
